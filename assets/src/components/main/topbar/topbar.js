const topbar = document.querySelector(".topbar");
const topbarTop = document.querySelector(".topbar__top");
const topbarBottom = document.querySelector(".topbar__bottom");
const nav = document.querySelector(".topbar__bottom-rights");
const consult = document.querySelector(".topbar__bottom-consult");
const lgMediaQuery = window.matchMedia('(min-width: 992px)');

const menuBtn = document.querySelector(".topbar__hamburger-wrapper");
const menuHamburger = document.querySelector(".topbar__hamburger");
// const content = document.querySelector(".content");

let lastScrollTop = 0;
window.addEventListener("scroll", function() {
   const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;   

   if (currentScrollTop > lastScrollTop) {
      // console.log("Down");
      topbarTop.style.display = "none";
      topbarBottom.style.top = "0";
      nav.style.opacity = "0";
      if (lgMediaQuery.matches === true) {
        setTimeout(() => {
          consult.style.opacity = "1";
          consult.style.zIndex = "1";
        }, 300);
      }      
   } else if (currentScrollTop < lastScrollTop) {
      // console.log("Up");
      topbarTop.style.display = "block";
      if(currentScrollTop === 0) {
        topbarBottom.style.top = `${topbarTop.offsetHeight}px`; // поднимаем на высоту верхнего блока
        setTimeout(() => {
          nav.style.opacity = "1";
        }, 300);
        if (lgMediaQuery.matches === true) {
          consult.style.opacity = "0";
          consult.style.zIndex = "-1";
        }        
      }
   }
   lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}, false);

// de\activate the menu
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBtn.classList.toggle("topbar__hamburger-wrapper--activate");
  menuHamburger.classList.toggle("animate");
  nav.classList.toggle("topbar__bottom-rights--active");
  // content.classList.toggle("content-active");
  // document.body.classList.toggle("no-scroll");
  // document.querySelector("html").classList.toggle("no-scroll");
});
