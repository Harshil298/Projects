window.addEventListener('scroll', () => {
    document.querySelector('.container').classList.toggle
    ('window-scroll', window.scrollY > 100)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector(".faq__icons i");
        if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus"
        }else{
            icon.className = "fa-solid fa-plus"
        }
    })
})


const menu = document.querySelectorAll(".navli");
const menuBtn = document.querySelectorAll("#open-menu-btn");
const closeBtn = document.querySelectorAll("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.toggle.classList=".navli"
})