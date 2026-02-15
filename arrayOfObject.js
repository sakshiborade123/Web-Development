let Books=[
    {
        bookname:"Atomic Habbits",
        author:"James Clear",
        price:645,
        language:["English","Marathi","Hindi"],
        genre:["Self Help", " Non Fiction","Drama"],
        stock:true
    },
    {
        bookname:"Chitra Katha",
        author:"Vasant More",
        price:155,
        language:["English","Marathi"],
        genre:["Motivation"],
        stock:false
    },
    {
        bookname:"Harray Potter",
        author:"JK Rowling",
        price:6545,
        language:["English","Marathi","Hindi","Kannada","Telugu"],
        genre:["Fantasy", " Thiller"],
        stock:true
    },
    {
        bookname:"Devakshi",
        author:"Deva",
        price:1000,
        language:["English","Marathi","Hindi"],
        genre:["Self Help", " Non Fiction"],
        stock:true
    },

]
Books.forEach((ele)=>{
    // console.log(ele.bookname.toUpperCase().split(" ")[0])
    console.log(ele.bookname.toUpperCase())
    
    console.log(ele)
})
let stockbook=Books.filter((ele)=>{
    
    return ele.stock
    
})
console.log(stockbook);
stockbook.forEach((ele)=>{
    console.log(ele.bookname);
})




let hindibook=Books.filter((ele)=>{
    return ele.language.includes("Hindi")
})
console.log(hindibook);

hindibook.forEach((ele)=>{
    console.log(ele.language);
})

//========================================================================

let price= Books.filter((ele)=>{
    return ele.price>500
})
console.log(price);

price.forEach((ele)=>{
    console.log(ele.price);
})
//-----------------------------------------------------------------

let drama=Books.filter((ele)=>{
    return ele.genre.includes("Drama")
})
console.log(drama);

drama.forEach((ele)=>{
    console.log(ele.genre);
})
//-----------------------------------------------------------
let hindibook1=Books.filter((ele)=>{
    return ele.language.includes("Hindi")&& ele.price>500
})
console.log(hindibook1);

hindibook.forEach((ele)=>{
    console.log(ele.language);
})