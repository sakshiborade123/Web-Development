let arr=[10,25,30,40,50,606,70,8,90,50,10]
console.log(arr.length);
let spiltarr= arr.slice(1,4);
console.log(spiltarr);
console.log(arr);
console.log(arr.indexOf(120));

//sort the arr
let city=["Mumbai","Pune","Karachi","Jaipur","Kashmir","Nashik"]
let sortcity=city.sort()

console.log(sortcity);



//asc order sort
let numsort = arr.sort((a,b)=>{
    return a-b
})
console.log(numsort);



//dec order sort
let numsort1 = arr.sort((a,b)=>{
    return b-a
})
console.log(numsort);
console.log(arr);


//every method compare all element in array
let x= arr.every((ele)=>{
    return ele> 9
})
console.log(x);



//some method compare some or one element in array
let y= arr.some((ele)=>{
    return ele >9
})
console.log(y);



//reverse aaray
let str="Sakshi"
let strreverse=""
for(let i=str.length-1; i>=0;i--){
    strreverse+=str[i]
    
}
console.log(strreverse);



//array reverse

// let str1="Sakshi"
// let arr1=[]
// for(let i=str.length-1; i>=0;i--){
//     strreverse+=str[i]
//     strreverse.push(arr1[i])
    
// }
// console.log(strreverse);



let reverseArr =city.reverse()
console.log(reverseArr);



//Reverese array
let str2="MUMBAI"
let spiltArr= str2.split("")
console.log(spiltArr);

let spiltArrReverse= spiltArr.reverse()
console.log(spiltArrReverse);

let spiltarrRevereSort= spiltArrReverse.join("")
console.log(spiltarrRevereSort);


console.log(str2.split("").reverse().join(""));