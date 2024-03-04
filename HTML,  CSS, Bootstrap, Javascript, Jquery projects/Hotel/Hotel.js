/* === Navbar Script === */

window.addEventListener("scroll", () => {
    document.querySelector(".header_wrapper").classList.toggle
    ("window-scroll", window.scrollY > 1)
})


/* === Nav Hide === */
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})

/* === Swiper slider === */

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});


/* === Counter Design === */

document.addEventListener("DOMContentLoaded", () => {
    function counter(id,start,end,duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end - start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
})


/* === Smooth Scrolling Jquery script === */
$(document).ready(function(){
    let scroll_link = $('.scroll');
   
     //smooth scrolling -----------------------
     scroll_link.click(function(e){
         e.preventDefault();
         let url = $('body').find($(this).attr('href')).offset().top-70;
         $('html, body').animate({
           scrollTop : url
         },700);
         $(this).parent().addClass('active');
         $(this).parent().siblings().removeClass('active');
         return false;	
      });
   });


   /* === Our Partner Swiper === */

   var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320':{
            slidesPerView: 2,
            spaceBetween: 8,
        },
    },
   });