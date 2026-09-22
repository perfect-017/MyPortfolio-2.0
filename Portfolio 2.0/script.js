window.addEventListener("load", function () {
    const text = document.getElementById("welcomeText");

    text.classList.remove("opacity-0");
});

document.addEventListener("DOMContentLoaded", function () {

    const text = document.getElementById("welcomeText");

    setTimeout(function () {
        text.classList.remove("opacity-0");
    }, 1000);

});