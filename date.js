let months=["Jan","Feb","Mar"]
let date= new Date()
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

let dob=new Date("2020-04-30")
let getYear=date.getFullYear()-dob.getFullYear()
let getMonths=date.getMonth()-dob.getMonth()
console.log(getYear);