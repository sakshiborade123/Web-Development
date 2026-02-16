let register=()=>{
    let alluser= JSON.parse(localStorage.getItem("alluser"))||[]
    let username= document.getElementById("username").value
    let password= document.getElementById("password").value
    let userobj={
        username,
        password
    }
    alluser.push(userobj)
    let x= JSON.stringify(alluser)
    localStorage.setItem("alluser",x)
}
