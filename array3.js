
let arr=[10,20,[30,40,[50,60,[70,80,90,0[20,[30,10,[90,1000]]]]]]]

// console.log(arr.length);
// console.log(arr);

// let x= arr.flat(Infinity)
// console.log(x);
// console.log(arr);



let arr1=[10,20,30,40,50,60]
// console.log(arr1);
// arr.fill("1",1,3)
// console.log(arr1);


// let doubleArr=""
// for(let i=0;i<=arr1.length-1;i++){
//     doubleArr

// }
// console.log(arr1);

let doubleArr=arr1.map((e)=>{
    return e+e
})

let filterArr=doubleArr.filter((e)=>{
    return e>10
})

let findArr=filterArr.find((e)=>{
    return e>20
})

console.log(findArr);




names=["sakshi","deva","devakshi"]
let sortnames=names.sort()

// let x= names().toUpperCase()
// console.log(x);

let result= names.toUpperCase
console.log(result);

console.log(sortnames);




