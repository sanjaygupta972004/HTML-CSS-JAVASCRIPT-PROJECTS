let timedisplay= document.querySelector(".timedisplay");
let startbtn= document.getElementById("stertbtn");
let stopbtn= document.getElementById("stopbtn");
let resetbtn= document.getElementById("resetbtn");

let msec= 00;
let secs= 00;
let mins= 00;

let timerid=null;

startbtn.addEventListener('click',()=>{
    if(timerid!==null){
        clearInterval(starttime);
    }
    timerid=setInterval(starttime,10)
});
stopbtn.addEventListener('click',()=>{
    clearInterval(timerid);
})
resetbtn.addEventListener('click',()=>{
    clearInterval(timerid);
    timedisplay.innerHTML=`00:00:00`
    mins=secs=msec=0;
})

function starttime(){
    msec++
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }
    let msecstring=msec<10?`${msec}`:msec;
    let secstring=secs<10?`${secs}` :secs
    let minsstring=mins<10?`${mins}`:mins;
timedisplay.innerHTML=`${minsstring} : ${secstring} : ${msecstring}`
}

//done with it