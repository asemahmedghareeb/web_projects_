var rounds=0;
let winsnum=0;
let losesnum=0;
let score=0;
let timecounter=35;
eventsImages=[];
classesNames=[];
arr=[null,  "1.png","2.jpg","3.png","4.png",
            "5.png","6.jpg","7.png","8.png",
            "1.png","2.jpg","3.png","4.png",
            "5.png","6.jpg","7.png","8.png"];
function changeRandomely(){
    var pos1=0; var pos2=0;
    for(var x=0;x<11;x++){
        pos1=Math.floor(Math.random()*16)+1
        pos2=Math.floor(Math.random()*16)+1
        var temp=arr[pos1];
        arr[pos1]=arr[pos2];
        arr[pos2]=temp;
    }
}
function clear(){
    for(let x=1;x<=16;x++){
        document.getElementsByClassName(String(x))[0].style="background-image:none";
    }
}
function show(){
    for(let x=1;x<=16;x++){
        document.getElementsByClassName(String(x))[0].style.backgroundImage=`url(${arr[x]})`;
    }
    let time=5;
    tgtimer=document.getElementsByClassName("timetg")[0];
    let t=setInterval(function(){
        time--;
        tgtimer.textContent=String(time);
        if(time==0){
            tgtimer.textContent="let's go";
            clear();
            clearInterval(t);
        }
    },1000)
    return true;
}
function roundsCounter(rounds){
    ++rounds;
    document.getElementsByClassName('rounds')[0].textContent=rounds;
}
function time(){
    if(rounds==10){
        return;
    }
    show();
    score=0;
    let setIervaL=setInterval(function(){
        timecounter--    
        var timer=document.getElementsByClassName("timer")[0];
        if(timecounter<=30){
            timer.textContent=String(timecounter);
        }
        if(score==8){
            roundsCounter(rounds);
            changeRandomely();
            clearInterval(setIervaL);
            winsnum++;
            document.getElementsByClassName("winsnum")[0].textContent=winsnum;
            timer.textContent="your are winner!!";
            document.querySelector("span").textContent="0";
            timecounter+=35;
            time();
        }
        else if(timecounter==0){
            roundsCounter(rounds);
            clearInterval(setIervaL)
            losesnum++;
            document.getElementsByClassName("losesnum")[0].textContent=losesnum;
            timer.textContent="Game Over !!";
            document.querySelector("span").textContent="0";
            timecounter+=35;
            time();
        }
        },1000)
}
function eventMaker(className){
        let div=document.getElementsByClassName(className)[0];
        div.addEventListener("click",function(){
        div.style.backgroundImage=`url(${arr[className]})`;
        classesNames.push(className)
        eventsImages.push(div.style.backgroundImage)
        if(eventsImages.length==2){
                let firstImgName=eventsImages.pop();
                let secondImgName=eventsImages.pop();
                let class1=classesNames.pop();
                let class2=classesNames.pop();
                if(firstImgName===secondImgName&class1!==class2){
                    document.querySelector("span").textContent=++score;
                }
                else if(firstImgName!==secondImgName){
                    document.getElementsByClassName(class1)[0].style.backgroundImage="";
                    document.getElementsByClassName(class2)[0].style.backgroundImage="";
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