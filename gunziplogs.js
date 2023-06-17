#!/usr/bin/env node

"use strict";

const yargs = require("yargs");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const convlog = require("./lib/convlog");

// inputには天鳳位の牌譜zipをダウンロードして展開したディレクトリを指定する
// https://tenhou.net/ranking.html
const argv = yargs
  .usage("Usage: $0 [--input=dir] [--output=dir]")
  .option("input", { alias: "i", description: "Input directory" })
  .option("output", { alias: "o", description: "Output directory" })
  .option("json", { alias: "j", description: "Json conversion (optional)" })
  .demandOption("input", "output").argv;

const gunzip = (input_filepath, basename) => {
  const output_filepath = path.join(
    argv.output,
    basename + (argv.json ? ".json" : ".xml")
  );

  const content = zlib.gunzipSync(fs.readFileSync(input_filepath));
  if (argv.json) {
    fs.writeFileSync(
      output_filepath,
      JSON.stringify(convlog(content.toString(), basename))
    );
  } else {
    fs.writeFileSync(output_filepath, content);
  }

  console.log(`${input_filepath} -> ${output_filepath}`);
};

const gunzip_mjlogs = () => {
  fs.mkdirSync(argv.output, { recursive: true });
  fs.readdirSync(argv.input)
    .filter((filename) => filename.match(/\.mjlog$/))
    .forEach((filename) =>
      gunzip(path.join(argv.input, filename), filename.replace(/&.*$/, ""))
    );
};

gunzip_mjlogs();
