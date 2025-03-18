let input = document.getElementById("password");
let btn = document.getElementById("eyeIcon");

btn.addEventListener("click", function() {
    if(input.type === "password") {
        input.type = "text";
        btn.textContent = '🙉';
    } else {
        input.type = "password";
        btn.textContent = '👁️';
    }
});

console.log(btn());