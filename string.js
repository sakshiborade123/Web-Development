// let str= "Hello"
// console.log(typeof str);
// let str2= new String("Hello")
// console.log(typeof str2);
// console.log(str==str2);




// //let username= ""

// let username = new String("")
// if(username){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

let x= "Mahendra Singh Dhoni"
console.log(x);
console.log(x.length);

let str= "Java and Java Script are Languages"
console.log(str.length);
console.log(str[-19]);
console.log(str.slice(14));
console.log(str.substring(14));
console.log(str.slice(14,20));
console.log(str.slice (14,20));
console.log(str.substring(14,20));

console.log(str.slice(20,14));
console.log(str.substring(20,14));
console.log(str.slice(-20, -14));

console.log(str.substring(-20, -14));
console.log(str.slice(-20,20));

console.log(str.slice(14,-20));
console.log(str.substring(-20,20));
console.log(str.substring(14,-20));

console.log(str.indexOf("Java"));
console.log(str.lastIndexOf("Java"));
console.log(str.indexOf("Java"));
console.log(str.lastIndexOf("java"));
console.log(str.indexOf("Java"));
console.log(str.lastIndexOf("java",5));


let Name= "ABCDE"
let Mobile= "123456789"

console.log(Name.substring(0,4));
console.log(Mobile.substring(8, 4))

console.log(Name.substring(0,4) + Mobile.substring(8, 4))



console.log(Name.slice(0,4))
console.log(Mobile.slice(-4))

console.log(Name.slice(0,4) + Mobile.slice(-4))



//upper case
console.log( str.toUpperCase());
console.log(str.toLowerCase());


//First Letter Capital

let str3= "javascript"
let upperstr3= str3.toUpperCase()

let lower= upperstr3.slice(1).toLowerCase()
console.log(lower);

let result= upperstr3[0]+ lower
console.log(result);


//last 4 character uppercase

let lowers= str3.toLowerCase()

let upper= lowers.slice(-4).toUpperCase()
console.log(upper);

let result1= lowers[-4] + upper
console.log(result1);


//Split (use to separate )

console.log(str.split());
console.log(str.split(" "));
console.log(str.split(""));
console.log(str.split("a",2));



//Include (if the word are present are not)

console.log(str.includes("Java"));
console.log(str.includes("java"));
console.log(str.includes("Java", 10));
console.log(str.includes("a"));



// Start with and End with 
console.log(str.length);
console.log(str.startsWith("java"));
console.log(str.startsWith("and"));
console.log(str.endsWith("script."));
console.log(str.endsWith("script"));
console.log(str.startsWith("and", 5));
console.log(str.endsWith("script", 20));


//Trim is use to remove space
console.log(str);
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.trim());

//pad start  && pad end
console.log(str.length);
console.log(str.padStart(10, "efefeff"));
console.log(str.padEnd(10,"rgregrrrg"));



//Repeat to repeat value
console.log(str.repeat());
console.log(str.repeat(1));
console.log(str.repeat(2));
console.log(str.repeat(2.5));

//Replace && Replace All
console.log(str.replace("Java", (match)=> {
    return match.toUpperCase();
}))

console.log(str.replaceAll("Java", (match)=> {
    return match.toUpperCase();
}))


//Regular Expression
console.log(str.replace(/java/gi, "HTML"));


//Char At()
console.log(str.charAt(2));
