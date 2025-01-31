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