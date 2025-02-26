### v1.1.11 / 2022-12-08

 - 脆弱性警告に対処(qs 6.7.0 → 6.11.0)
 - パッケージを最新化
  - express 4.17.1 → 15.4.1
  - yargs 15.4.1 → 17.6.2

### v1.1.10 / 2022-11-10

 - 脆弱性警告に対処(minimatch 3.0.4 → 3.1.2)

### v1.1.9 / 2022-04-03

 - 脆弱性警告に対処(minimist 1.2.5 → 1.2.6)

### v1.1.8 / 2022-01-24

 - 脆弱性警告に対処(mocha 9.1.3 → 9.2.0)

### v1.1.7 / 2021-10-23

 - #7 三人麻雀の牌譜が指定された場合のエラー応答を変更
 - test/ を npm の配布物から除外

### v1.1.6 / 2021-10-21

 - 脆弱性警告に対処(mocha 8.1.1 → 9.1.3)

### v1.1.5 / 2021-05-10

 - 脆弱性警告に対処(lodash 4.17.19 → 4.17.21)

### v1.1.4 / 2021-03-30

 - 脆弱性警告に対処(y18n 4.0.0 → 4.0.1)

### v1.1.3 / 2020-08-14

 - serialize-javascript の脆弱性対応のために mocha 8.0.1 → 8.1.1 に最新化

### v1.1.2 / 2020-08-03

 - 不要なファイルを削除

### v1.1.1 / 2020-08-03

 - README.md を修正

## v1.1.0 / 2020-08-02

 - #3 牌譜変換時にタイトルを指定できるようにした
 - #4 複数の牌譜を変換して1つのファイルにまとめられるようにした
 - require('@kobalab/tenhou-log') で convlog() が使えるようにした

### v1.0.6 / 2020-07-19

 - listen に失敗した場合のスタックトレースを抑止し、終了コード -1 で終了するよう修正

### v1.0.5 / 2020-07-19

 - 無変換の天鳳の牌譜(XML形式)を取得できるようにした

### v1.0.4 / 2020-07-19

 - 環境変数 → コマンドラインオプション に変更

### v1.0.3 / 2020-07-17

 - 脆弱性警告に対処(lodash)

### v1.0.2 / 2020-07-16

 - リクエストヘッダに User-Agent: tenhou-log/1.0 を追加

### v1.0.1 / 2020-07-10

 - #1 tenhou-logが異常時でも0でリターンしている問題に対応

# v1.0.0 / 2020-07-06

 - 初期リリース
