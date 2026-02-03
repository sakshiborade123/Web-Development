let s1= "SAKSHI";
let s2= "BORADE";
let first3= s2.slice(0,3);
console.log(s1.includes(first3));


let str="SAKSHI DNYANESHWAR BORADE"
let word=str.slice(0,str.indexOf(" "));
console.log(word);


let str1= "Javascript";
let result= str1.toUpperCase().slice(2,5);
console.log(result);

let city= "Chennai";
console.log(city.slice(-2));


let msg="Good Morning Sakshi";
console.log(msg.toLowerCase());


let india= "India is my country";
console.log(india.includes("my"));

let lang= "JavaScript";
console.log(lang.substring(4,10));


let word1= "Telugu";
for(let index= 0; index< word1.length; index++){
    console.log(word1.charAt(index));
}


let text="Marathi";
let first=text.indexOf("a");
let second= text.indexOf("a",first+1);
console.log(second);


let str3= "Hello World";
console.log(str3.slice(str.indexOf(" ")+1));



let word2="proud";
let up=word.toUpperCase();
console.log(up.includes("PRO"));


let s=" A B C D";
console.log(s.split(" "));


let str4="Hello";
let mid=Math.floor(str.length/2);
console.log(str4.substring(mid,mid+1));


let name="Aravind Kumar";
console.log(name.includes("Kumar"));



let word3= "initiative";
console.log(word3.lastIndexOf("i"));


let city2="Pune";
let result1=city2.charAt(0).toUpperCase() + city2.slice(1);
console.log(result1);


console.log("banana".split("a"));


let sentence= "JavaScript is easy";
console.log(sentence.split(" "));