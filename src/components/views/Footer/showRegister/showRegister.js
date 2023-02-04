function showRegister() {
    var x = document.getElementById("registerArea");
    if(!x.classList.contains('hide')){
        x.classList.add("hide");
    }
    else {
        x.classList.remove("hide");
    }
    var y = document.getElementById("registerButton");
    if(y.textContent.includes("Button")) {
        y.textContent = "Hide register"
    }
    else {
        y.textContent = "register Button"
    }
}

export default showRegister;