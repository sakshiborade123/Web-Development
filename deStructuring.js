// const { use } = require("react");

//FOR ARRAY WE NEED TO STORE IN ARRAY[]
let arr=[10,20,30,40,50,60,70]
console.log(arr);

let [a,b,c,d,e,f,g]=arr

console.log(b);
console.log(d);


//FOR OBJECT WE NEED TO STORED IN {} BRACKET
let car={
    brand1:"BMW",
    price1:34543568,
    color:["red","black"]
}

let {price1,color,brand1}=car
console.log(price1);
console.log(brand1);


//REST OPERATOR USE IN LHS SYMBOL(...)
let mobileobj={
    brand:"Iphone",
    color:"red",
    price:2154543,
    stock:false,
    store:{
        city:"Pune",
        area:"Deccan"
    },
    models:["Iphone","Iphone16","Iphone17","Iphone18"]
}
let {brand , price,...obj}=mobileobj;

//SPREAD OPERATOR USE IN RHS SYMBOL(...)

let arr1=[10,20,30,40]
let arr2=[50,60,70,80]

let arr3=[...arr1,...arr2]
console.log(arr3);

let car2={
    brand2:"BMW",
    price2:56536536,
}

let car3={
    brand3:"Audi",
    price3:4543553435,
}
let car4={...car2,...car3}
console.log(car4);


let array1=[10,20,30,40]
let demo=([a,b,c,d])=>{
    console.log(a);
}

demo(array1)

let car1={
    brand4:"TATA",
    price:454343,
    color:["Red","Black"]

}
let display=({brand4,...obj})=>{
    console.log(brand4);
    console.log(obj);
}
display(car1)

let user={
    name:"Doremon",
    mobile:656335333
}
localStorage.setItem("useobj",JSON.stringify(user))
let x= JSON.parse(localStorage.getItem("userobj"))
console.log(x);