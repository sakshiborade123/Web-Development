function validateForm() {

    let password = document.getElementById("password").value;
    let error = document.getElementById("error-msg");

    if (password === "") {
        error.innerHTML = "Password is required!";
    } else {
        error.innerHTML = "";
        alert("Login Successful");
    }
}