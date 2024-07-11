function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateEmail() {
    const id = document.getElementById("email").value;
if (isValidEmail(id)) {
   alert("Success!");
} else {
    alert("Please enter a valid email address")
}
}