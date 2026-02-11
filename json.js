let mobobj={
    brand:"Iphone",
    color:"Red",
    price:4534355,
    display:function(){

    },
    color:["red","black"]
    
}
console.log(mobobj);
let x=JSON.stringify(mobobj)
console.log(x);

let y=JSON.parse(x)

console.log(x.brand);
console.log(y);