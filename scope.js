
//global scope
// var a= 10;
// let x= 20;
// const y= 30;

// let demo=() =>{
//     console.log(a);
//     console.log(x);
//     console.log(y);
// };

// demo();

// if(true){
//     console.log(a,x,y);
// }

//----------------------------------------------------------

// //Function Scope

// let display = ()=> {
//     var a=10;
//     let x= 20;
//     const y =30;
// };

// display();
// console.log(a,b,c);


//-----------------------------------------------------------
//Block Scope

// var a= 10;
// let x= 20;
// const y= 30;
// {
//     var a= 10;
//     let x= 20;
//     const y=30;
// }
// console.log(a);
// console.log(x);
// console.log(y);

//--------------------------------------------------------------

//Lexical Scope

// let outerfunc=()=>{
//     let a= 10;
//     console.log("Outer Function",a);

//     let innerfunct =()=>{
//         let b= 20
//         console.log("Inner Function",b,a);
//     };
//     innerfunct();

// };

// outerfunc();

//---------------------------------------------------------------
//shadowing
// let a= 10;

// let demo=()=>{
//     var a=30;
//     console.log(a);
// };

// demo();
// console.log(a);

//-----------------------------------------------------------------
// let a= 10;
// let demo= ()=>{
//     var a= 30;
//     a= 50;
//     console.log(a);
// };

// demo();
// console.log(a);

//----------------------------------------------------------------
let a= 500;
let arrfunc=()=>{
    let a= 1000;
    console.log(a);
    
    let innerfunct=()=>{
        let a= 2000;
        console.log(a);
    }
    innerfunct()
}