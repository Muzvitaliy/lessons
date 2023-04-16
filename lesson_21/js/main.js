document.addEventListener("click", function (e) {
   const targetElement = e.target;

   if (targetElement.closest('.menu-icon')) {
      document.documentElement.classList.toggle('menu-open');
      e.preventDefault();
   }

})

window.addEventListener("scroll", function () {
   let header = document.querySelector("header");
   header.classList.toggle("sticky", window.scrollY > 100)
})