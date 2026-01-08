const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const modal = document.getElementById("successModal");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(validate()){
        modal.style.display = "flex";
        form.reset();
        clearStatus();
    }
});

function validate(){
    let isValid = true;

    if(username.value.trim().length < 3){
        setError(username, "Minimum 3 characters");
        isValid = false;
    } else setSuccess(username);

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        setError(email, "Invalid email");
        isValid = false;
    } else setSuccess(email);

    if(password.value.length < 6){
        setError(password, "Min 6 characters");
        isValid = false;
    } else setSuccess(password);

    if(confirmPassword.value !== password.value || confirmPassword.value === ""){
        setError(confirmPassword, "Passwords do not match");
        isValid = false;
    } else setSuccess(confirmPassword);

    return isValid;
}

function setError(input, msg){
    const group = input.parentElement;
    group.className = "input-group error";
    group.querySelector("small").innerText = msg;
}

function setSuccess(input){
    input.parentElement.className = "input-group success";
}

function togglePassword(id){
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

function closeModal(){
    modal.style.display = "none";
}

function clearStatus(){
    document.querySelectorAll(".input-group").forEach(group=>{
        group.className = "input-group";
    });
}
