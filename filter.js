let ele= [10,20,30,40,50]

let filterArr= ele.filter((ele) =>{
    return ele> 20 && ele %2===0
})
console.log(filterArr);


let fruits=["apple", "kiwi","banana"]
let sort=fruits.filter((fruits)=>{
    return fruits =='A'
})
console.log(sort);


// let divi=ele.filter((ele)=>{
//     return ele % 3 ===0
// })
// console.log(divi);

let divi=ele.filter((ele)=>{
    return ele <=30
})
console.log(divi);




let everynum=ele.filter((ele)=>{
    return ele * 2
})
console.log(everynum);


let fruit=["apple", "banana", "kiwi"]
let fruitArr= fruit.filter((fruit)=>{
    return fruit.length
})
console.log(fruit);



// let price=[100,200,300]
// let gst=price.filter((price)=>{
//     return price +price *18/100
// })
// console.log(prices);



// let score=[90,80,70]
// let grade= score.map((score)=>{
//     if(grade>=90){
//         return"A+" 
//     }
//     else if(grade>=80){
//         return "GradeA"
//     }
//     else{
//         return "gradeb"
//     }

// })
// console.log(grade);


let citys= ["Hydrabad"]
let y= citys.map((ele)=>{
    return ele.slice(0,2)
})
console.log(y);



// let names=["Ram","Sita","Ajay","Ram"]
// let n=names.map((ele)=>{
//     //return ele.slice(0,1)=='A'

//     return names.startswith ("A")
// })
// console.log(n);



