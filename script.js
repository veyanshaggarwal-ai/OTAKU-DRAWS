// ===============================
// OTAKU DRAWS V2
// ===============================

// Mobile Menu

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menu && navLinks) {
    menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Active Navbar

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }
});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            e.preventDefault();
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });
});

// Hero Image Animation

const heroImage = document.querySelector(".hero-image");

if(heroImage){

    heroImage.addEventListener("mouseenter",()=>{

        heroImage.style.transform="scale(1.04)";

    });

    heroImage.addEventListener("mouseleave",()=>{

        heroImage.style.transform="scale(1)";

    });

}
/* ==========================
   MOBILE MENU
========================== */

.show-menu{

display:flex !important;
flex-direction:column;
position:absolute;
top:90px;
right:8%;

background:#11111b;

padding:25px;

border-radius:15px;

width:240px;

gap:18px;

box-shadow:0 0 25px rgba(138,43,226,.45);

}

.show-menu a{

font-size:18px;

}
