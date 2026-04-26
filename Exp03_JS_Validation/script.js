function validateRegister() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (name === "") {
        alert("Name cannot be empty");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email");
        return false;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    if (pass !== confirm) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration Successful");
    return true;
}


function validateLogin() {

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    if (email === "" || pass === "") {
        alert("All fields are required");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email format");
        return false;
    }

    alert("Login Successful");
    return true;
}