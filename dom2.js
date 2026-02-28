let box=document.getElementById("box")

let h1=document.createElement("h1")
let h2=document.createElement("h2")

h1.innerText="OM"
h1.style.color="red"
h2.innerText="Namah Shivay"
console.log(h1);

box.append("hello",h1,h2)

//===============================================================
let name=[];
name[0]= "Sakshi";
name[1]="Devakshi";
name[2]="Deva";
console.log(name);

//===============================================================
let names=["Sakshi","Devakshi","Deva","SK"]
names.forEach((ele)=>{
    let li= document.createElement("li")
    li.innerText= ele
    console.log(ele);
    box.append(li)
})