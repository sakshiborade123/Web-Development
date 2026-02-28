let a= document.getElementById("heading")
console.log(a);
console.log(a.innerText);
console.log(a.innerHTML);
console.log(a.textContent);

let b= document.getElementsByClassName("para")
console.log(b);

let c= document.getElementsByTagName("p")
console.log(c);

let d= document.querySelector("p")
console.log(d);

let e= document.querySelectorAll(".para")
console.log(e);

let box= document.getElementById("box")
console.log(box);
box.innerText="Hello Document Object Model 1"
box.innerHTML="<h1>Hello Document Object Model 1 </h1>"