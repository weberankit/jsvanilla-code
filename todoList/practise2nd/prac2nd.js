const inputEl=document.querySelector(".input-el")
const btn=document.querySelector(".btn")
const list=document.querySelector(".list")
console.log(inputEl,btn,list)
let array=JSON.parse(localStorage.getItem("k"))  || {list:[],checked:[]}
console.log(array)
if(array){
    Render(array)
}
btn.addEventListener("click",()=>{
    list.innerHTML=''
    const InputVal=inputEl.value
    console.log(InputVal)
    // const Element=document.createElement("div")
    // Element.innerHTML=`${InputVal}`
    array.list.push(InputVal)
    array.checked.push("not")
    Render(array)
})

function Render(array){
  array.list.map((item,index)=>{
      return  (
        list.innerHTML+=`<p>${item}  <button class="Edit" onclick={handleEdit(${index})}>Edit</button> <button onclick={handleRemove(${index})}>Remove</button> <input ${array.checked[index]} onclick={handleCheck(${index})} type="checkbox"></p>`
      )
    })

localStorage.setItem('k',JSON.stringify(array))
}


function handleCheck(id){
array.checked[id]="checked"

list.innerHTML=''
Render(array)
}



function handleEdit(id){
    console.log("kk")
 array= array.map((item,index)=>{
    if(index===id){
        const User=window.prompt("userwant to edit ")
        if(User){
            console.log("user",User)
            return item=User
        }
       
    }
    return item
})
console.log(array)
list.innerHTML=``
Render(array)


}

function handleRemove(id){
  array=  array.filter((item,index)=>{
        return id!==index
    })
list.innerHTML=''
    Render(array)
}