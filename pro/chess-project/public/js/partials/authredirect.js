document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupbtn").addEventListener("click", function () {
        window.location.href = "/auth/signup";  // Fixed the redirect function
    });

    document.getElementById("loginbtn").addEventListener("click", function () {
        window.location.href = "/auth/login";   // Updated to be consistent
    });
});
