const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const warning = document.getElementById("warning");

confirm.addEventListener("input", (event) =>{
    console.log("Password: " + password.value);
    console.log(confirm.value);
    console.log(warning.textContent);
    if(password.value !== confirm.value){
        password.style = "outline: none !important; border-color: red"
        confirm.style = "outline: none !important; border-color: red"
        warning.style = "visibility: visible;"
    }
    else{
        password.style = "outline: none !important; border-color: #E5E7EB"
        confirm.style = "outline: none !important; border-color: #E5E7EB"
        warning.style = "visibility: hidden;"
    }
})