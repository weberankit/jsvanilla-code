console.log("hii everyone ")

const container=document.querySelector(".title")
 
console.log(container)
let data=[
    {
      "title": "Accordion Item 1",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam sed elit eleifend viverra nec ut purus. Nam ac mauris sapien. Sed fringilla velit nec justo finibus fermentum."
    },
    {
      "title": "Accordion Item 2",
      "content": "Integer feugiat, arcu non feugiat vehicula, nunc lorem consectetur leo, nec condimentum purus eros eget nulla. In at tellus nec ante feugiat ultricies nec sed ligula."
    },
    {
      "title": "Accordion Item 3",
      "content": "Vivamus fringilla orci in lacus placerat, nec faucibus metus feugiat. Donec ut enim vitae mi consectetur elementum. Ut in diam at lorem lacinia finibus."
    }
  ]

/**/
data.map((item ,index)=>{
container.innerHTML+=`${item.title} <div class="text"> </div><button onClick={handleHide(${index})}>Hide</button> <button onClick={handleShow(${index})}>show me</button>`



 
})
let allText=container.querySelectorAll(".text")
console.log(allText)
function handleShow(index){
   // const text=container.querySelector(".text")
   // console.log(index)

    data.map((item,i)=>{
       if(i===index){
        let selectConatiner=allText[i]
        selectConatiner.innerHTML=item.content
        }

allText.forEach((item,ch)=>{
    if(ch!==index){
        item.innerHTML=""
    }
})
  


    })
}

function handleHide(index){
    data.map((item,indi)=>{
        if(index===indi){
            let selectConatiner=allText[index]
            selectConatiner.innerHTML=""
        }
    })
}

  