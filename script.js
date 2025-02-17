var passwordField = document.getElementById("password");

function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    
    for (var i = 0; i < passwordLength; i++) {  // Fixed loop condition
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber); // Use charAt() instead of substring()
    }
    
    passwordField.value = password;
}

function copyPassword() {
    var copyText = passwordField;
    copyText.select();
    copyText.setSelectionRange(0, 999);
    
    // Modern Clipboard API
    navigator.clipboard.writeText(copyText.value).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}
