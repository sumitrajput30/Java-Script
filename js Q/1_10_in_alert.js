function s(){
    let a =confirm("DO you want to see the no from 1 to 10")

    let p=" "
    if(a)
    {
        for(let i=1;i<=10;i++)
           p+=i;
            alert(p)
    }
    else 
    {
        alert("cancel")
    }
}
s();