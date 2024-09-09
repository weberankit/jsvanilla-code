console.log("Hi Ankit how are you")

const inputEl=document.querySelector(".input Input")
const createBtn=document.querySelector(".btn-create")
const list=document.querySelector(".list")
console.log(inputEl,createBtn)


createBtn.addEventListener("click",()=>{
const inputValue=inputEl.value
//console.log(inputValue)
const listItem=document.createElement("li")
listItem.innerHTML=`
<div>
<div>${inputValue}</div> 
<div class="edit"> Edit</div>
<div class="remove">Remove</div>
</div>
`
list.append(listItem)
})


//now for edit

list.addEventListener("click",(event)=>{
   // console.log(event.target)
    if(event.target.classList.contains("edit")){
        const element=event.target.previousElementSibling
       
        const inputCreate=document.createElement("input")
       const saveBtn=document.createElement("button")
       saveBtn.textContent="save"

       
        element.append(inputCreate)
        element.append(saveBtn)
        saveBtn.addEventListener("click",()=>{
         element.innerHTML=inputCreate.value   
        })

        

    }
if(event.target.classList.contains("remove")){
            const deleteElement=event.target.parentElement.parentElement
           // console.log(deleteElement.parentElement,"dd")
           console.log(deleteElement)
           deleteElement.remove()
        }







})