let obj={
    name:"sumit",
    age:25,
    city:"bhopal",
    city:"bombay",
    fruits:["Apple", "Orange", "Mango"],

    cybrom:function(){
        // console.log("hello sumit");
        console.log(`hello ${this.name} your age is ${this.age}`);
    }
}
obj.cybrom()
 console.log(obj.fruits[1]);// array access 
 console.log(obj);
// console.log(obj.city); // object access

obj.email="sumitrajput88956@gmail.com"; //inserting the data
 obj.age=26  //updating the object

 delete obj.age  // deleting the object value--
console.log(obj);


// destructure

let student={
    name:"sumit",
    age:22,
    city:"bhopal",
    roll:1

 

}
let {name,age,city,roll}=student;
console.log(student)



//spread operator


//two s1 obj merge 
let s1={name:"sumit",
    age:22,
    city:"bhopal",
    roll:1}

    let s2={
        country:"india"
    }
 let c1={...s1,...s2}

 console.log(c1)

 // three spread
 let s3={name:"sumit",
    age:22,
    city:"bhopal",
    roll:1}

    let s4={
        country:"india"
    }
    let s5={
        pin:462003
    }
 let c={...s3,...s4,...s5}

 console.log(c) 

 //array form applying spead form

 let s6= ["s", "f" , "g"]
 let s7= ["J", "P" , "H"]

 let d={...s6,...s7}

 console.log(d)