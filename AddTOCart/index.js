console.log("this is my job")
const list=document.querySelector(".list")
const cart=document.querySelector(".cart")

console.log(list)
let store;
console.log(JSON.parse(localStorage.getItem("jsCart")))
let arr=  JSON.parse(localStorage.getItem("jsCart")) || []

console.log(arr)
if(arr){
    cartItem()
}
function handleDel(id){
    console.log(id)
    arr=arr.filter((item)=>{
        if(item.id!== id){
            return item
        }
    })
    console.log(arr,"frtt")
    localStorage.setItem("jsCart",JSON.stringify(arr))

     cartItem()
}

function handleEle(id){
  //find
    let alreadyExistEle=arr.find((item)=>{
    if(item.id==id){
         return item
    }
    })
    //based on find do operation
    if(alreadyExistEle){
       alreadyExistEle.quat += 1
    }else{
        arr.push({id:id,quat:1})
    }
    localStorage.setItem("jsCart",JSON.stringify(arr))
  cartItem()
   }
async function callingData(){
    const getData= await fetch('https://dummyjson.com/carts') 
    console.log(getData) 
    const res= await getData.json()
  store=res.carts
store.map((item)=>{
   // console.log(item)
    //list.textContent+=item.id
    const ele=document.createElement("div")
       ele.innerHTML=`${item.id} <button onClick={handleEle(${item.id})}>add</button>`
       list.append(ele)
})
//pass id to that fun s
//will find in arry if avail incrment otherise jut add it
//lastly map over funnction to show elements





}
callingData()

function cartItem(){
/*1st approach
    cart.innerHTML=arr.map((item)=>{
        console.log(item,"items")
        return `${item.id }<button onClick={handleDel(${item.id})} >delete</button>`
    }).join(" ")
*/
    //second approacj
    /* 
    cart.innerHTML=''
    arr.map((item)=>{
        //console.log(item,"items")
        cart.innerHTML+= `${item.id }<button onClick={handleDel(${item.id})} >delete</button>`
    })
*/
    //thired similar to 2nd
    cart.innerHTML=''
    arr.map((item)=>{
        //console.log(item,"items")
        const ele=document.createElement("div")
        ele.innerHTML+= `${item.id }<button onClick={handleDel(${item.id})} >delete</button>`
        cart.append(ele)
    })
}
