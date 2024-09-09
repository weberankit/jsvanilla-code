console.log("hi Ankit w/c to countdown")
const btn=document.querySelector(".btn")
const hrs = document.querySelector(".hrs")
const minu = document.querySelector(".min")
const secd = document.querySelector(".sec")
const resetBtn=document.querySelector(".Reset")


let timer

btn.addEventListener("click",()=>{
  
    const presentTime=Date.now()
    let hrsValue = hrs.value
    let minValue = minu.value
    let secValue = secd.value
      console.log(secValue)
   // console.log(hrsValue)
  
    const futureTime= Number( hrsValue*3600*1000+minValue*60*1000+secValue*1000+presentTime)
    // console.log( futureTime ,futureTime+Date.now(),Date.now())
  //console.log(new Date(futureTime)," ",new Date(futureTime+Date.now())," ",new Date(Date.now()))

  timer= setInterval(()=>{
const timeLeft=futureTime-Date.now()
//console.log(timeLeft,new Date(timeLeft))
if(timeLeft<0){
    clearInterval(timer)
    
}

//const seconds=Math.floor(timeLeft/1000)
/*
By using the modulo operator, 
effectively finding the "leftover" seconds and minutes that
 aren't part of a full minute or hour, respectively.
*/
const seconds=Math.floor(timeLeft/1000)
const minutes=Math.floor(seconds/60)
let remainHrs=Math.floor(minutes/60)

let remainSec=seconds%60
let remainMin=minutes%60

console.log(timeLeft,remainSec,seconds,timeLeft,minutes)
/**/
if (remainHrs<10){
    remainHrs="0"+remainHrs
}
if(remainMin<10){
    remainMin="0"+remainMin
}

remainSec<10?remainSec="0"+remainSec:remainSec




hrs.value=remainHrs
minu.value=remainMin
secd.value=remainSec+2


},1000)




})
resetBtn.addEventListener("click",()=>{
    clearInterval(timer)
    hrs.value=null
minu.value=null
secd.value=null
})
