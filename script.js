document.addEventListener("DOMContentLoaded", function () {
    var sidemenu = document.getElementById("sidemenu");

    window.openmenu = function () {
        sidemenu.style.right = "0";
    };

    window.closemenu = function () {
        sidemenu.style.right = "-200px";
    };
});

