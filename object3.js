
let student1={
    name:"Vipul",
    mobile:215345553,
    address:{
        city:"Pune"
    },
    skills:["html","css"]
}

let obj=Object.assign({},student1)
console.log(student1);
console.log(obj);

obj.name="Aditi"
obj.address.city="Mumbai"
obj.mobile="354539886"
obj.skills.push("js","react")
console.log(obj);
console.log(student1);



let car1={
    brand:"BMW",
    price:5000000,
    color:["red","black"]
}
let car2=Object.assign({},car1)

car2.brand="Audi"
car2.price=1000000
car2.color.push("blue","white")
console.log(car1);
console.log(car2);