let promise= new Promise (function(resolve,reject){
    
    let x= true
    if(x){
        resolve("Success")
    }
    else{
        reject("Order Failure")
    }
})
console.log(promise);

//then use for success
//catch use for reject
//finally for both

promise.then(function(res){
    console.log(res);
});

promise.catch(function(res){
    console.log(res);
})

promise.finally(function(){
    console.log("Promise Completed!");
})



//===============================================================
//2nd Method
promise.then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log(res);
}).finally(()=>{
    console.log("Promise Completed!");
})




//==========================================================================
let display= new Promise ((resolve, reject)=>{
    resolve(10)
})

display.then((res)=>{
    console.log(res*2);
    return res*2
}).then((res)=>{
    console.log(res*2);
    return res*2
}).then((res)=>{
    console.log(res*2);
    return res*2
})