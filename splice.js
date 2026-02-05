
let cartData= ["Watch", "Washing Machine","Mobile"," Shirt"]
// cartData.push("TV")
// cartData.pop()

cartData.splice(1,2, "TV","Speakers")
console.log(cartData)


//-----------------------------------------------------------------------------

// let animals=["LION","TIGER","RABBIT","ELEPHANT","LEOPARD"]

// animals.splice(2,0,"FOX")

// //animals.splice(2,1)

// console.log(animals)

// console.log(cartData.includes("Watch"));


let searchProduct= ()=>{
    let productName= document.getElementById("productname").value;

    console.log(productName);
    let modifyProduct=cartData.map((ele)=>{
        return ele.toLowerCase()
    })
    // console.log(modifyProduct);
    // console.log(modifyProduct.includes(productName.toLowerCase()));
}

let datadiv= document.getElementById("DataDisplay")
console.log(datadiv);

if(modifyProduct.includes(productName.toLowerCase())){
    datadiv.innerText= productName.toLowerCase()
}
else{
    datadiv.innerText="Data Not Found"
}