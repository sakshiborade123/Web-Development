
let arr=["Sakshi", "Deva","Devakshi","Neha"]

let x= arr.map((ele)=>{
    return ele.toUpperCase()

})
console.log(x);


let y= arr.map((ele)=>{
    return ele.slice(0,2)
})
console.log(y);


let str="SAKSHI"
let strarr=str.split("")

console.log(strarr);
strarr.forEach((ele)=>{
    console.log(ele);
})


