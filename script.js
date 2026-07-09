// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Active Navbar

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if(link.getAttribute("href") === currentPage){
        link.classList.add("active");
    }

});
@media(max-width:900px){

.nav-links.active{

display:flex;
flex-direction:column;
position:absolute;
top:90px;
right:25px;

background:#14141d;

padding:25px;

border-radius:15px;

width:230px;

box-shadow:0 0 25px rgba(138,43,226,.5);

}

}

