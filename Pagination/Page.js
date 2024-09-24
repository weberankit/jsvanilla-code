const list = document.querySelector(".list");
const pageNo=document.querySelector(".pageNo")
console.log(list,pageNo);
let array=[]
let page=0
async function fetchData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
  //  console.log(json);

     array=json


showList()

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//showList
function showList(){
  list.innerHTML=""
  pageNo.innerHTML=""
 array.slice(page*10,(page+1)*10).map((item,index)=>{
    let ele=document.createElement("p")
     ele.textContent=item.title
     list.append(ele)
})


let arr=new Array(Math.floor(array.length/10)).fill("o").map((item,index)=>{

  pageNo.innerHTML+=  `<div onClick="handlePage(${index})" >${index+1}</div>`
})
console.log(arr)
}

function handlePage(val){
  //console.log(val)
  //since val is index so we have increment 
  page=val
  showList()
}

function handlePrev(){
  console.log("l")
  if(page<=0){
    page=page
    return
  }
  page-=1
  showList()
}

function handleNext(){
  console.log(array.length-1,page)
if(page>=Math.floor((array.length-1)/10)){
page=page
return
}
 console.log("joker",page)
page=page+1
showList()
}

fetchData();



