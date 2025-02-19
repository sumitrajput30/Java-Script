let a=[
    {
        name:"sumit",
        age:22,
        city:"bhopal"

    },
    {
        name:"sumit",
        age:22,
        city:"bhopal"

    },
    {
        name:"sumit",
        age:22,
        city:"bhopal"

    },
    {
        name:"sumit",
        age:22,
        city:"bhopal"

    },
    {
        name:"sumit",
        age:22,
        city:"bhopal"

    }
]


 let a1= document.querySelector("#s1")
 let s=a.map((e)=>{
  a1.innerHTML+=`
  <div>
  <h1>${e.name}</h1>
  <h1>${e.age}</h1>
  <h1>${e.city}</h1>

  </div>
  
  `
 
})