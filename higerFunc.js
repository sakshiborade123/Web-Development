
let higherFunction = (a,b, cb)=> {
    console.log(a);
    console.log(b);
    cb()
};

higherFunction(10, "hi", function(){
    console.log("Callback Function");
});

higherFunction(10, "hi",()=>{
    console.log("Callback Function");
});