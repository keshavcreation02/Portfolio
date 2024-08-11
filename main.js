document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (var tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    for (var tablink of tablinks) {
        tablink.addEventListener("click", function (event) {
            opentab(event.currentTarget.getAttribute("data-tab"));
        });
    }

    var navToggle = document.querySelector(".fa-bars");
    var navMenu = document.querySelector("nav ul");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
