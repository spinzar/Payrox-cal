"use strict";
function payrox(wage,workinghours,overwork,overworktime,holiday,midnight){
    let result=0;
    let obj={
        "overworkextra1":0.25,
        "overworkextra2":0.5,
        "nightextra":0.25,
        "holidayextra":0.35
    }
    //深夜勤務している上に休日出勤の場合
    if(midnight!==0&&holiday==true){
        result+=(workinghours-midnight)*wage*(1+obj["holidayextra"]);
        result+=midnight*wage*(1+obj["nightextra"]+obj["holidayextra"]);
    //深夜勤務しているが休日出勤はしていない場合
    }else if(midnight!==0&&holiday==false){
        if(overwork==1&&overworktime>=midnight){
            result+=((workinghours-overworktime)*wage)+((overworktime-midnight)*wage*(1+obj["overworkextra1"]))+(midnight*wage*(1+obj["nightextra"]));
        }else if(overwork==1&&overworktime<midnight){
            result+=((workinghours-midnight)*wage)+((midnight-overworktime)*wage*(1+obj["nightextra"]))+(overworktime*wage*(1+obj["nightextra"]+obj["overworkextra1"]));
        }else if(overwork==2&&overworktime>=midnight){
            result+=((workinghours-overworktime)*wage)+((overworktime-midnight)*wage*(1+obj["overworkextra2"]))+(midnight*wage*(1+obj["nightextra"]+obj["overworkextra2"]));
        }else if(overwork==2&&overworktime<midnight){
            result+=((workinghours-midnight)*wage)+((midnight-overworktime)*wage*(1+obj["nightextra"]))+(overworktime*wage*(1+obj["overworkextra2"]+obj["nightextra"]));
        }else if(overwork===0){
            result+=((workinghours-midnight)*wage)+(midnight*wage*(1+obj["nightextra"]));
        }
    //深夜勤務はしていないが休日出勤をしている場合
    }else if(midnight===0&&holiday==true){
        result+=workinghours*wage*(1+obj["holidayextra"]);
    //深夜勤務も休日出勤もしていない上で時間外労働1の場合
    }else if(holiday==false&&overwork==1){
        result+=((workinghours-overworktime)*wage)+(overworktime*wage*(1+obj["overworkextra1"]));
    //深夜勤務も休日出勤もしていない上で時間外労働2の場合
    }else if(holiday==false&&overwork==2){
        result+=((workinghours-overworktime)*wage)+(overworktime*wage*(1+obj["overworkextra2"]));
    }else{
        result+=workinghours*wage;
    }
    return Math.round(result);
}
module.exports={
    add:payrox
}
