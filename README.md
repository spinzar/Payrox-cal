# **Payrox-cal** #

[![npm version](https://badge.fury.io/js/payrox-cal.svg)](https://badge.fury.io/js/payrox-cal) [![Build Status](https://travis-ci.org/kota-yata/Payrox-cal.svg?branch=master)](https://travis-ci.org/kota-yata/Payrox-cal) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Payroll calculation package for Japanese, based on [Labor Standards Act](https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=322AC0000000049) in 2020.

日本のアルバイト、パートタイム従業員の給料計算npmパッケージ。2020年現在の[労働基準法](https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=322AC0000000049)に基づいています。

# **description** #

アルバイト、またはパートタイムの従業員の一回のシフトごとに給料を算出するパッケージです。深夜勤務、8時間以上連続勤務、週40時間以上勤務、法定休日出勤の割増が考慮されます。細かな仕様についてはUsageに記載しておりますのでそちらをご覧ください。

※このパッケージはアルバイト、パートタイム従業員向けの計算を行うため、正社員等の法律に適応していない場合があります。ご了承ください。

**※このパッケージは入力値が労働基準法に違反していないことを前提に計算が行われます。例えば...**

- 8時間を超える勤務の場合は休憩を1時間以上取ることが義務付けられていますが、休憩時間は考慮されないため違法であるかどうかのチェックは行われません。
- 18歳未満の学生が深夜時間に勤務することは許されていませんが、それについての真偽値を入力する引数は設けません。

詳しくは[労働基準法](https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=322AC0000000049)をご確認ください。

# **Usage** #

**このパッケージは引数の入力が複雑です。質問等はいつでも[twitter](https://twitter.com/AlGoRiT94422608)のDMでお受けしています。**
**「こんな場合はどう入力すれば良いの？」といった質問もOKです！**

ローカルにインストール

```
$ npm install payrox-cal
```

```node.js
const payrox=require("payrox-cal");//payrox-calをインポート
payrox.add(1000,9,1,4,false,0);//payrox.add(時給(整数),実働時間(数値),時間外労働(0~2),時間外労働の時間(数値),法定休日出勤(真偽値),深夜勤務時間(数値))
//数値が小数点以下になる場合は小数第二位で四捨五入(4.2343=>4.23)
```

- 第一引数<時給>...第一引数には時給を整数で入力します
- 第二引数<実働時間>...第二引数には実働時間、つまりシフトの時間から休憩時間を引いた時間を入力します。小数点第1位で四捨五入

ex.)6時間40分=>6.67時間, 7時間...7時間そのまま

- 第三引数<時間外労働の種類>...第三引数には時間外労働の種類を0~2の整数で入力します。
  - 0...時間外労働なし
  - 1...このシフトだけで8時間を超えている場合、または実働時間が週40時間を超える時、または時間外労働が月45時間、または年360時間を超えている場合(このシフトで超える場合も含む)
  - 2...時間外労働が月60時間を超えている場合(このシフトで超える場合も含む)
  
- 第四引数<時間外労働の時間>...第四引数には時間外労働に該当する時間を数値で入力します(小数第2位まで)。例えば...
  - シフトが9時間なので第三引数に1を入力した=>時間外労働に該当する時間は1時間なので1を入力
  - シフトは5時間だが既に週40時間以上働いているので第三引数に1を入力した=>時間外労働に該当する時間は5時間なので5を入力
  - シフトは3時間20分で、あと1時間で時間外労働が月60時間を超えるので第三引数に2を入力した...時間外労働に該当する時間は2時間20分なので2.34を入力
  
- 第五引数<法定休日出勤>...急にシフトが入ったなどの理由で法定休日に出勤する場合はtrueを、そうでない場合はfalseを入力する。法定休日はほとんどの場合契約書などに記載されていますが、もし記載されていない場合は勤務先に問い合わせてみてください。

- 第六引数<深夜勤務時間>...第六引数には深夜割増賃金に該当する時間を数値で入力してください。深夜勤務に該当するのは22:00~05:00です。

ex.)シフトが19時から6時間、翌01:00まで入った=>深夜勤務に該当するのは22:00~01:00なので3を入力する
  
# **LICENSE** #

Payrox-cal is under [MIT license](https://opensource.org/licenses/mit-license.php)

# **Author** #
Kota Yatagai (https://twitter.com/AlGoRiT94422608)
