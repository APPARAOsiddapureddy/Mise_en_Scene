function validateForm() {
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Username validation
    if (userName.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    // Phone number validation
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number. Please enter 10 digits.");
        return false;
    }

    // Password validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Terms and Conditions validation
    if (!document.getElementById("terms").checked) {
        alert("Please accept the terms and conditions.");
        return false;
    }

    return true;
}

document.getElementById("submit").addEventListener("click",
    ()=>{
        if(validateForm()===true){
        alert("You are Become a Member Of Mise-en-Scene");
    }
}
)
