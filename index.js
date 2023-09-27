// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
    let h1 = document.getElementById("text");
    h1.textContent = "This is really cool!";
    h1.append(h1)
});
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);


