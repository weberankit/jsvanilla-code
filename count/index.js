const list = document.querySelector(".list");
const btn = document.querySelector(".str");
console.log(list, btn);
let count = 0;
list.innerHTML = count;

btn.addEventListener("click", () => {
  console.log("joker");
/*
  if (count == 0) {
    let timer = setInterval(() => {
      if (count < 10) {
        count++;
        list.innerHTML = count;
        console.log(count);
      } else {
        clearInterval(timer);
      }
    }, 1000);
  } else if (count == 10) {
    let timer = setInterval(() => {
      if (count >= 1) {
        count--;
        list.innerHTML = count;
        console.log(count);
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
*/
  if(count==0){
    setTimer(1)
  }else if (count==10){
  setTimer(-1)
  }
});



function setTimer(no){
  let timer=  setInterval(()=>{
    count=count+no
  list.innerHTML=count
    if(count==10 || count ==0){
        clearInterval(timer)
    }
    },1000)

}
