let mobileobj={
    brand:"Iphone",
    color:"Red",
    price:6564643,
    stock:false,

    store:{
        city:"Pune",
        area:"Deccan"
    },
    models:["Iphone15","Iphone16","Iphone17","Iphone18"]

}
//console.log(mobileobj);
//console.log(mobileobj.models);

mobileobj.models.forEach((e)=>{
    console.log(e)
})


//local storage

localStorage.setItem("carname","BMW")
localStorage.setItem("price",1000000)

let x= localStorage.getItem("Carname")
//console.log(x);

localStorage.removeItem("carname")

localStorage.clear()








//all key present in  array 
console.log(Object.keys(mobileobj));

//all value in array
console.log(Object.values(mobileobj));

console.log(Object.entries(mobileobj));
//we can update delete or chnage
Object.freeze(mobileobj);
//we only update
// Object.seal(mobileobj);
// mobileobj.ram="7gb"
// delete mobileobj.models
console.log(mobileobj);
console.log(Object.isSealed(mobileobj));