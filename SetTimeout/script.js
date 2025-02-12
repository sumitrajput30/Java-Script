setTimeout(()=>{
    console.log("running...");
}, 3000)


console.log("In Proccess")

let a=document.querySelector("#s")
let s1=()=>{
    setTimeout(()=>{
        a.innerHTML="sumit"
    }, 3000)
}


let count=0;
setInterval(()=>{
    console.log(count)
    count++
},2000)



// count in innerHtml
let a1=document.querySelector("#s")
let inter;
let count1=0;
let s2=()=>{
  inter =  setInterval(()=>{
        a.innerHTML=count1;
        count1++;
    }, 1000)
}

let stop=()=>{
    clearInterval(inter)
}