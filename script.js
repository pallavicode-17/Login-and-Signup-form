

// Toggle password visibility between plain text and password dots
function hideshowpass(btn_obj) {
    var passwordInput = document.getElementById("password");
    
    if (passwordInput.getAttribute("type") == "password") {
        // If password field is masked, show text and change button text to "hide"
        passwordInput.setAttribute("type", "text");
        btn_obj.setAttribute("value", "hide");
    } else {
        // If password field is visible, mask it and change button text to "show"
        passwordInput.setAttribute("type", "password");
        btn_obj.setAttribute("value", "show");
    }
}

// Show login form container
function showloginbox(){
    document.getElementById("login_up").style.display = "block";
}

// Show signup form container
function showlog_inbox(){
    document.getElementById("sign_up").style.display = "block";
}

// Hide signup form container
function hide_signup(){
    document.getElementById("sign_up").style.display = "none";
}

// Hide login form container
function hide_login(){
    document.getElementById("login_up").style.display = "none";
}
