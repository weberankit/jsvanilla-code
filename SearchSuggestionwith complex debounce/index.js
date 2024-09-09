console.log("jooker")
const searchBox=document.querySelector(".searchBox")
console.log(searchBox)
const show=document.querySelector(".show")








/*for single function handle debounciing*/
async function called() {
  query = searchBox.value;
    console.log("Query:", query);
    const fetching = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + query);
    const data = await fetching.json();
    console.log(data[1]);

    const store = data[1].map(item => {
        return `<li>${item}</li>`;
    });
    console.log(store);
    show.innerHTML = store.join("");

}



   let timer
  function debounced( fun,delay) {
 
       // console.log(func)
         
          if (timer) {
              clearTimeout(timer);
          }
    
          timer = setTimeout(() => {
              fun(); // Call the passed function after the delay
          }, delay);
      
        
    
    }

      searchBox.addEventListener("input",() => {


        debounced(called,500)
        })
  
//for multiple debouncing--best



const select=document.querySelector(".in")
//apply debounce same function on 2-different function 

//1st function
async function calling() {
  query = select.value;
    console.log("Query:", query);
    const fetching = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + query);
    const data = await fetching.json();
    console.log(data[1]);

    const store = data[1].map(item => {
        return `<li>${item}</li>`;
    });
    console.log(store);
    show.innerHTML = store.join("");

}


//2nd function
let counter=0
   const petData = (extra) => {
    this.name="dd"
     // calls an API and gets Data
     console.log("petchg Data ..", counter++);
     console.log(extra)
   }
  
  function debounce (fn, d) {
    let timer;
    return function () {
     //let context = this,
       //args = arguments;
       // console.log(context)
      clearTimeout(timer);
      timer = setTimeout(() => {
        //passing values for argments
        fn.apply(this,["ll"]);
      }, d);
    }
  }
  select.addEventListener("input",
     debounce(calling, 300)
  )
  select.addEventListener("input",
  debounce(petData, 300)
  
)


/**do not do this */
/*it does not dd eventlistnere r instead of it calll this function not use it
select.addEventListener("input",()=>{
  debounce(petData, 300)

}

)*/