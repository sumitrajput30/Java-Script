//array or object
[
{
    key:"value",
    age:22
},{
 name:"sumit"
},{

},{
    key:"value"
}

]

//Map is array method it is return new array
//arrow function
let a=[4,658,54,8,48,54,1,3]
let ans1=a.map((e)=>{
   return e*2;
})
console.log(ans1)

//normal function

let ans2=a.map(function(e){
    return e*2;
 })
 console.log(ans2)


 //filter method

let ans=a.filter((e)=>{

    return e>5;
})

console.log(ans)

//even 
let ans3=a.filter((e)=>{

    return e%2==0;
})
console.log(ans3)



//odd

let an1=a.filter((e)=>{

    return e%2!==0;
})

console.log(an1)


foreach
let an=a.forEach((e)=>{

   console.log(e*2)
})
