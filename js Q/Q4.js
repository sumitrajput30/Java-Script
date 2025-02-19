let a=()=>{
    let b = document.querySelector("#s")
   let b1=document.querySelector("#s1")
  
   if (b.style.display == "none") {
    b.style.display = "block";
    b1.innerHTML="hide"
  } else {
    b.style.display = "none";
    
      b1.innerHTML="show"
  }
  
  }
  
  