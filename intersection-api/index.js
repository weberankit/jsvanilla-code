const targetEl=document.querySelector(".target")

const inters=new IntersectionObserver(function(entries){
entries.forEach(entry=>{
    console.log(entry)
    if(entry.isIntersecting){
        console.log("kk")
    }
})
},{threshold:"1"})

inters.observe(targetEl)


