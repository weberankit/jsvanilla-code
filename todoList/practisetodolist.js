//what to build
//to do llist
//user add list by typing in input
//save the input by click on save button
//user can delete the ssaved one
//user can refres it data should be there not loss
//(optional fetures)user if click on item/list it should be cross


let input=document.getElementById("tex")
let saveBtn=document.querySelector(".saveBtn")
let list=document.querySelector(".list")
console.log(input,saveBtn)
const listArr=JSON.parse(localStorage.getItem("list")) || []
//const getElements=JSON.parse(localStorage.getItem("list"))
console.log(listArr)

window.addEventListener("DOMContentLoaded",()=>{

    //const newEle=document.createElement("div")
    render()

})

saveBtn.addEventListener("click",saveList)
function saveList(){
    const inputEl=input.value
   
       listArr.push(inputEl)
localStorage.setItem("list",JSON.stringify(listArr))
    render()
}



function render(){
    console.log("kk")
    list.innerHTML=""
    if(listArr.length!==0){
    listArr.map((item)=>{
        const newEle=document.createElement("div")
        console.log("pkk") 
       
    newEle.innerHTML=` <span class="val">${item} </span>
    <button class="edit">Edit</button>
    <button class="del">Delete</button>
    <input type="checkbox" class="checkbox">
    `
    list.append(newEle)

    })
    console.log(listArr)
}
}





list.addEventListener("click",(e)=>{
//to cross if checked
    if(e.target.classList.contains("checkbox")){
     let ele=e.target
       if(ele.checked){
        let mainEle=e.target.parentElement
       let prev=mainEle.querySelector(".val")
       prev.style.textDecoration="underline"
       }else{
        let mainEle=e.target.parentElement
        let prev=mainEle.querySelector(".val")
        prev.style.textDecoration="none"
    }
       





    }
    
//console.log(e)
if(e.target.classList.contains("edit")){
    let mainEle=e.target.parentElement
  let editInput =prompt("please provide vale")
  console.log(mainEle)
   
  if(editInput){
    let div=document.createElement("div")
    let prev=mainEle.querySelector(".val")
   

    console.log(prev)
    prev.textContent=editInput
    
    //div.textContent=editInput
    mainEle.append(div)
    
  }
}



if(e.target.classList.contains("del")){
    console.log("hh")
    let mainEle=e.target.parentElement
    console.log(mainEle)

    mainEle.remove()
    console.log(mainEle.textContent)
    //localStorage.setItem("list",JSON.stringify(list))
    updateLocalStorage()
console.log(listArr,list)
}

})
function updateLocalStorage() {
    let items = [];
    list.querySelectorAll(".val").forEach((item) => {
     //   let isChecked = item.parentElement.querySelector(".checkbox").checked;
        items.push(item.textContent);
        console.log(item.textContent,item)
    });
    localStorage.setItem("list", JSON.stringify(items));
}