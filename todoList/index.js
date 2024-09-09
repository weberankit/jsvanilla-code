const inputValue=document.querySelector(".input")
const create=document.querySelector(".btn-create")
const list=document.querySelector(".list")

create.addEventListener('click',()=>{

const listing=document.createElement("li")
//console.log(listing)
listing.innerHTML=` 
<div> 
<div>
 <div>${inputValue.value} </div>
 <div class="edit">Edit</div>  
</div>
 </div>




`
//console.log(inputValue.value )
list.append(listing)


})


list.addEventListener("click",(event)=>{
 // console.log(event.target.tagName,"ee")
if(event.target.classList.contains('edit')){
    console.log('jjjj')
const selecting=event.target.previousElementSibling
console.log(selecting)
const InputElement=document.createElement("input")
const save=document.createElement("button")
save.textContent="save"
console.log(InputElement)
selecting.append(InputElement)
selecting.append(save)
save.addEventListener("click",()=>{
    selecting.innerHTML=InputElement.value
    const remove=document.createElement("button")
    remove.textContent='remove'
    remove.classList.add("remove")
    selecting.append(remove)
})

}
if(event.target.classList.contains("remove")){
    const removeElement=event.target.parentElement.parentElement.parentElement.parentElement
    console.log(removeElement)
    removeElement.remove()
}






})



