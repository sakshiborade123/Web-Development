let multipleUser=[]
let display=()=>{
    let username= document.getElementById("username").value
    let usermobile= document.getElementById("usermobile").value


    let user={
        name:username,
        mobile:usermobile
    }
    multipleUser.push(user)
    console.log(multipleUser);
}