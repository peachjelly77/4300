function showLogin() {
    var x = document.getElementById("loginArea");
    if(!x.classList.contains('hide')){
        x.classList.add("hide");
    }
    else {
        x.classList.remove("hide");
    }
    var y = document.getElementById("loginButton");
    if(y.textContent.includes("Button")) {
        y.textContent = "Hide Login"
    }
    else {
        y.textContent = "Login Button"
    }
}

export default showLogin;