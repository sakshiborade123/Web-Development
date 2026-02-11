let car1={
    brand:"BMW",
    price:656356,
    color:["red","black"]
}
let car2=JSON.stringify(car1)
console.log(car2);

let car3=JSON.parse(car2);
console.log(car3);

car3.brand="audi"
car3.price=31212331
car3.color.push("Blue","White")
console.log(car2);