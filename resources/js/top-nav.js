const navItems = document.getElementById('navlinks').querySelectorAll('li');
const currentURL = window.location.href;

for (const navItem of navItems) {
  const navLink = navItem.querySelector('a');
  const navLinkURL = navLink.href;

  if (currentURL === navLinkURL) {
    navItem.classList.add('active');
  }
}
var navlinks=document.getElementById("navlinks");
function showMenu(){
    navlinks.style.right="0";
    navlinks.style.display="block";
}
function hideMenu(){
    // navlinks.style.right="-500px";
    navlinks.style.display="none";
}


