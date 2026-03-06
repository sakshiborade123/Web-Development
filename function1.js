let displayUser = () => {
    let username = document.getElementById("username").value;
    let usermsg = document.getElementById("usermsg");

    usermsg.innerText = `Hello ${username}`;
}