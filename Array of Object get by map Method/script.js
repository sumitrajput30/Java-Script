let a=[
    {
        name:"Amit",
        age:22,
        city:"bhopal",
        bloodgroup:"B+",
        mobile:79745,
        salary:26000
  },{
    name:"sumit",
    age:21,
    city:"mumbai",
    bloodgroup:"A+",
    mobile:79741,
    salary:76000
  },{
    name:"Shiv",
    age:28,
    city:"Delhi",
    bloodgroup:"c+",
    mobile:54321,
    salary:6000
  },{
    name:"ABC",
    age:25,
    city:"Guna",
    bloodgroup:"D+",
    mobile:12345,
    salary:60000
  }
]

let show=document.querySelector("#s")

let b=a.map((e)=>{
    // show.innerHTML+=`
    // <div>
    // <h1 id="k">${e.name}</h1>
    // <h1 id="d">${e.age}</h1>
    // <h1 id="c">${e.city}</h1>
    // <h1>${e.bloodgroup}</h1>
    // <h1>${e.mobile}</h1>
    // <h1>${e.salary}</h1>
    // </div>
    // `

})
// table form


let show1=document.querySelector("#b")

let b1=a.map((e)=>{
show1.innerHTML+=`
<tr>
<td id="name">${e.name}</td>
<td id="age">${e.age}</td>
<td id="city">${e.city}</td>
<td id="bg">${e.bloodgroup}</td>
<td id="mb">${e.mobile}</td>
<td id="salary">${e.salary}</td>
`

})