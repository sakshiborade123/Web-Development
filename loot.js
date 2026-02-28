let collectionbox=document.getElementsByClassName("box")
let nodebox=document.querySelectorAll(".box")
let div= document.createElement("div")
div.className="box"

div.style.height="100px"
div.style.width="100px"
div.style.backgroundColor="red"
document.body.append(div)

console.log(collectionbox);
console.log(nodebox);


///===============================================================
// let collhead=document.getElementsByClassName("head")
// let nodelisthead= document.querySelectorAll(".head")

// let div=document.createElement("div")
// div.className="head"


let headingCollection= document.getElementsByClassName("heading")
let headingNodeList= document.querySelectorAll(".heading")
console.log(headingCollection);
console.log(headingNodeList);

headingNodeList.forEach((ele)=>{
    ele.style.color="red"
})

for(let i=0;i<headingCollection.length;i++){
    headingCollection[i].style.backgroundColor="green"
}