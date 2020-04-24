# **Payrox-calc** #

[![Build Status](https://travis-ci.org/kota-yata/Payrox-cal.svg?branch=master)](https://travis-ci.org/kota-yata/Payrox-cal)

![image](https://user-images.githubusercontent.com/51294895/80219704-d1603a80-867d-11ea-8f6f-0dae0c1f5880.png)

Payroll calculation package for Japanese, based on [Labor Standards Act](https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=322AC0000000049) in 2020.

日本のアルバイト、パートタイム従業員の給料計算npmパッケージ。2020年現在の[労働基準法](https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=322AC0000000049)に基づいています。

# **description** #

アルバイト、またはパートタイムの従業員の一回のシフトごとに給料を算出するパッケージです。深夜勤務、8時間以上連続勤務、週40時間以上勤務、法定休日出勤の割増が考慮されます。細かな仕様についてはUsageに記載しておりますのでそちらをご覧ください。

※このパッケージはアルバイト、パートタイム従業員向けの計算を行うため、正社員等の法律に適応していない場合があります。ご了承ください。

**※このパッケージは入力値が労働基準法に違反していないことを前提に計算が行われます。例えば...**

- 8時間を超える勤務の場合は休憩を1時間以上取ることが義務付けられていますが、休憩時間を1時間以内の数値で入力してもエラーや注意は出力されません。
- 18歳未満の学生が深夜時間に勤務することは許されていませんが、それについての真偽値を入力する引数は設けません。

詳しくは[労働基準法](https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=322AC0000000049)をご確認ください。

# **Usage** #
ローカルにインストール

```
$ npm install payrox-cal
```

```node.js
const payrox=require("payrox-cal");//payrox-calをインポート
payrox.add(1000,9,1,4,false,0);//payrox.add(時給(int),実働時間(int),時間外労働(int),時間外労働の時間(int),法定休日出勤(bool),深夜勤務時間(int))
```

- 第一引数<時給>...第一引数には時給を整数で入力します
- 第二引数<実働時間>...第二引数には実働時間、つまりシフトの時間から休憩時間を引いた時間を入力します。小数点第1位で四捨五入

ex.)6時間40分=>6.7時間

- 第三引数<時間外労働の種類>...第三引数には時間外労働の種類を0~2の数値で入力します。
  - 0...時間外労働なし
  - 1...このシフトだけで8時間を
  
# **LICENSE** #

Payrox-calc is under [MIT license](https://opensource.org/licenses/mit-license.php)

# **Author** #
Kota Yatagai (https://twitter.com/AlGoRiT94422608)
