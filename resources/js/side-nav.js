
var toggleIcon = document.querySelector('.fa-star-half-stroke');
var sidenav = document.getElementById("sidenav");
var main = document.getElementById("main");
var originalSidenavWidth = "20%"; // Adjust this to your original menu width
var menuOpen = false;

function toggleMenu() {
    if (menuOpen) {
        // Close the menu
        sidenav.style.width = "0";
        main.style.width = "100%";
        setTimeout(function () {
            sidenav.style.display = "none";
        }, 300); // Optional: Delay hiding to allow for animation if you have one
        menuOpen = false;
    } else {
        // Open the menu
        sidenav.style.display = "block";
        sidenav.style.width = originalSidenavWidth;
        main.style.width = "80%"; // Adjust the width as needed
        menuOpen = true;
    }

    // Toggle the visibility of the "toggle" icon
    toggleIcon.style.display = menuOpen ? "none" : "block";
}


// var openIcon= document.getElementById("fa-circle-chevron-right");
// var closeIcon= document.getElementById("fa-circle-chevron-left");       
//  var sidenav = document.getElementById("sidenav");
// var main = document.getElementById("main");
// var originalSidenavWidth = "20%"; // Adjust this to your original menu width

// function hideMenu() {
//     sidenav.style.width = "0";
//     main.style.width = "100%";
//     setTimeout(function () {
//         sidenav.style.display = "none";
//     }, 300); // Optional: Delay hiding to allow for animation if you have one
//     closeIcon.style.display="none";
//     // openIcon.style.display="block";
// }

// function showMenu() {
    
//     sidenav.style.display = "block";
//     sidenav.style.width = originalSidenavWidth;
//     main.style.width = "80%"; // Adjust the width as needed
//     openIcon.style.display="none";
//     // closeIcon.style.display="block";
// }
