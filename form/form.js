let sub=()=>{
    let inpname=document.querySelector("#name").value ;
    let inpnum=document.querySelector("#number").value ;
    let inpemail=document.querySelector("#email").value ;
    let inppass=document.querySelector("#pass").value ;
    let inpcpass=document.querySelector("#cpass").value ;


   let errname=document.querySelector("#errorname")
   let erremail=document.querySelector("#erroremail")
   let errnum=document.querySelector("#errornum")
   let errpass=document.querySelector("#errorpass")
   let errcpass=document.querySelector("#errorcpass")

   
   if(inpname==""){
    errname.innerHTML="Please fill the Name field"
    errname.style.color="red"
    return false;
   }


//    number

else if( isNaN(inpnum)){
    errnum.innerHTML="please enter fill the number only"
    return false;
}

else if (inpnum.length!==10){
    errnum.innerHTML="please enter 10 digital only"
    return false 
}

else if( !(inpemail.includes("@") && inpemail.includes(".com")))
    {
    erremail.innerHTML="please enter valid email"
    return false;
}

else if (!(inppass.match([/1234567890/])

    && inppass.match([/!@#$%^&*()/])
    && inppass.match([/a-z/])
    && inppass.match([/A-Z/])

)){
    errpass.innerHTML="";
}



   if(inppass==inpcpass)
   {
    return true;
   }

   else{
    errcpass.innerHTML="password not match. plz enter the correct pass"
    errcpass.style.color="red"
    return false;
   }

}