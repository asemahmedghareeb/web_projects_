var rounds=0;
let winsnum=0;
let losesnum=0;
var score=0;
var i=35;
const sec=i;
arr=[1,1,7,2,2,8,3,1,4,3,5,6,5,6,8,4,7];
events=[];
cls=[];

function changeRandomely(){
    var pos1=0; var pos2=0;
    for(var x=0;x<31;x++){
        pos1=Math.floor(Math.random()*16)+1
        pos2=Math.floor(Math.random()*16)+1
        var temp=arr[pos1];
        arr[pos1]=arr[pos2];
        arr[pos2]=temp;
    }
}
function clear(){
    for(let x=1;x<=16;x++){
        document.getElementsByClassName(String(x))[0].textContent="";
    }
}
function show(){
    for(let x=1;x<=16;x++){
        document.getElementsByClassName(String(x))[0].textContent=String(arr[x]);
    }
    var x=5;
    tgtimer=document.getElementsByClassName("timetg")[0];
    let t=setInterval(function(){
        x--;
        tgtimer.textContent=String(x);
        if(x==0){
            tgtimer.textContent="let's go";
            clear();
            clearInterval(t);
        }
    },1000)
    return true;
}


function time(){
    if(rounds==20){
        return;
    }
    show();
    score=0;
    let setIervaL=setInterval(function(){
        i--    
        var timer=document.getElementsByClassName("timer")[0];
        if(i<=30){
            timer.textContent=String(i);
        }
        if(score==8){
            ++rounds;
            document.getElementsByClassName('rounds')[0].textContent=rounds;
            changeRandomely();
            clearInterval(setIervaL);
            winsnum++;
            document.getElementsByClassName("winsnum")[0].textContent=winsnum;
            timer.textContent="your are winner!!";
            document.querySelector("span").textContent="0";
            i=sec;
            time(sec);
        }
        else if(i==0){
            ++rounds;
            document.getElementsByClassName('rounds')[0].textContent=rounds;
            clearInterval(setIervaL)
            losesnum++;
            document.getElementsByClassName("losesnum")[0].textContent=losesnum;
            timer.textContent="Game Over !!";
            document.querySelector("span").textContent="0";
            i=sec;
            time(i);
        }
        },1000)
}


function eventMaker(className){
        var div=document.getElementsByClassName(className)[0];
        div.addEventListener("click",function(){
        div.textContent=String(arr[className]);
        cls.push(String(className))
        events.push(div.textContent);
        if(events.length==2){
                two=events.pop();
                one=events.pop();
                c1=cls.pop();
                c2=cls.pop();
                if(one===two&c1!==c2){
                    document.querySelector("span").textContent=++score;
                    //solving bug
                    // document.getElementsByClassName(c1)[0].removeEventListener("mousedown",eventMaker(c1));
                    // document.getElementsByClassName(c2)[0].removeEventListener("mousedown",eventMaker(c2));
                    //
                }
                else if(one!==two){
                    var t=document.getElementsByClassName(c1)[0].textContent="";
                    var v=document.getElementsByClassName(c2)[0].textContent="";
                }
            }
    })
}

function addingevents(){
    for(let i=1;i<=16;i++){
        eventMaker(String(i))
    }
}
addingevents();
changeRandomely();
time();