window.onscroll = function () { myFunction() };


// Get header
var coverId = document.getElementById("coverHeader");
var navbarId = document.getElementById("navbarId");

function myFunction() {
    if (window.scrollY > 350) {
        coverId.classList.add("scrolled");
        navbarId.classList.add("show-navbar")
    } else {
        coverId.classList.remove("scrolled");
        navbarId.classList.remove("show-navbar")
    }


}

