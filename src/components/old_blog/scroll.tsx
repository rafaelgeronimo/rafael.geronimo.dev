let prevScrollPos = window.scrollY;

function onScroll() {
  window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      const navbar = document.getElementById('navbar');
      if (navbar) navbar.style.top = '0';
    } else {
      const navbar = document.getElementById('navbar');
      if (navbar) navbar.style.top = '-90px';
    }
    prevScrollPos = currentScrollPos;
  }
}

window.addEventListener('scroll', onScroll);

export default function Scroll() {
  return null;
}
