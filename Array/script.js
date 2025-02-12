function a(){
    let arr=["apple", "mango", "banana","grapes" ]
    let arr1=["apple", "mango", "banana","grapes" ]

    console.log(arr.length);
    arr.pop(); // remove last element 
    arr.push("b", "a"); // add last new element 
    arr.shift()  // remove first one
    arr.unshift("a",1) // add in front 


   

    //concat



    console.log(arr.concat(arr1))
    console.log(reverse(arr1))

   // slice
   let arr2=[1,2,3,55,48,45,4,5]
   console.log(arr2.slice(0,-1))

   //splice

  console.log(arr1.splice(2,2,9)) // first input, second delete, third add 

 //  sort it is sorting ascending order

  arr=arr1.sort();
  console.log(arr1.reverse(arr))

 }


 function s(){
  //   document.getElementById("s")
  //     document.getElementByClassName();
  let para = document.querySelector("#s").style.color = "blue";
     para.style.color = "blue";
     para.style.backgroundColor ="yellow"
 para.innerHTML="hello i am developer";
  

   
 }