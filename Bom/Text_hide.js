let s=()=>{
    let change=document.querySelector("#a")
    let btn=document.querySelector("#b")
    
    if(change.style.display=="none")
    {
        change.style.display="block"
        btn.innerHTML="hide"

    }
    else
   {
    change.style.display="none"
     btn.innerHTML="show"
   }

}