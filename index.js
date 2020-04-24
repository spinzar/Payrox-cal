"use strict";
//overwork...年360時間、月45時間、週40時間を超えている場合は1と記入、月60時間を超えている場合は2と記入
//overworktime...overworkで超過している時間を記入
//holiday...決められている法定休日(通常は日曜日)や月ごとに決められている法定休日に出勤する場合はtrueを記入
//midnight...実働時間のうち22~5時に働いている時間を記入
//overworkとmidnight重複は1.5倍、holidayとmidnightの重複は1.6倍でoverworkとholidayはholiday優先。3つ重複した場合はholidayとmidnight
function payrox(wage,workinghours,overwork,overworktime,holiday,midnight){
    let result=0;
    //深夜勤務している上に休日出勤の場合
    if(midnight!==0&&holiday==true){
        //実働時間から深夜勤務時間を引いた値に時給*1.35
        result+=(workinghours-midnight)*wage*1.35;
        //深夜勤務時間に時給*1.6
        result+=midnight*wage*1.6;
    //深夜勤務しているが休日出勤はしていない場合
    }else if(midnight!==0&&holiday==false){
        //時間外労働1で時間外労働が深夜勤務時間より長い場合
        if(overwork==1&&overworktime>=midnight){
            //実働時間から時間外労働を引いた値に時給をかける
            result+=(workinghours-overworktime)*wage;
            //時間外労働から深夜勤務時間を引いた値に時給*1.25
            result+=(overworktime-midnight)*wage*1.25;
            //深夜勤務時間に時給*1.5
            result+=midnight*wage*1.5;
        //時間外労働1で時間外労働が深夜勤務時間より短い場合
        }else if(overwork==1&&overworktime<midnight){
            //実働時間から深夜勤務時間を引いた値に時給をかける
            result+=(workinghours-midnight)*wage;
            //深夜勤務時間から時間外労働を引いた値に時給*1.25
            result+=(midnight-overworktime)*wage*1.25;
            //時間外労働に時給*1.5
            result+=overworktime*wage*1.5;
        //時間外労働2で時間外労働が深夜勤務時間より長い場合
        }else if(overwork==2&&overworktime>=midnight){
            //実働時間から時間外労働を引いた値に時給をかける
            result+=(workinghours-overworktime)*wage;
            //時間外労働から深夜勤務時間を引いた値に時給*1.5
            result+=(overworktime-midnight)*wage*1.5;
            //深夜勤務時間に時給*1.75
            result+=midnight*wage*1.75;
        //時間外労働2で時間外労働が深夜勤務時間より短い場合
        }else if(overwork==2&&overworktime<midnight){
            //実働時間から深夜勤務時間を引いた値に時給をかける
            result+=(workinghours-midnight)*wage;
            //深夜勤務時間から時間外労働を引いた値に時給*1.25
            result+=(midnight-overworktime)*wage*1.25;
            //時間外労働に時給*1.75
            result+=overworktime*wage*1.75;
        //深夜勤務のみの場合
        }else if(overwork===0){
            //実働時間から深夜勤務時間を引いた値に時給をかける
            result+=(workinghours-midnight)*wage;
            //深夜勤務時間に時給*1.25
            result+=midnight*wage*1.25;
        }
    //深夜勤務はしていないが休日出勤をしている場合
    }else if(midnight===0&&holiday==true){
        //休日出勤で時間外労働2の場合
        if(overwork==2){
            //実働時間から時間外労働を引いた値に時給*1.35
            result+=(workinghours-overworktime)*wage*1.35;
            //時間外労働に時給*1.5
            result+=overworktime*wage*1.5;
        //休日出勤で時間外労働1または時間外労働していない場合
        }else{
            //実働時間に時給*1.35
            result+=workinghours*wage*1.35
        }
    //深夜勤務も休日出勤もしていない上で時間外労働1の場合
    }else if(holiday==false&&overwork==1){
        result+=(workinghours-overworktime)*wage;
        result+=overworktime*wage*1.25;
    //深夜勤務も休日出勤もしていない上で時間外労働2の場合
    }else if(holiday==false&&overwork==2){
        result+=(workinghours-overworktime)*wage;
        result+=overworktime*wage*1.5;
    }else{
        result+=workinghours*wage;
    }
    let answer=Math.round(result);
    return answer;
}

module.exports={
    add:payrox
}