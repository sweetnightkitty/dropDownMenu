import "./styles.css";

const dropdownBtn = document.querySelector(".btn-dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownLinks = document.querySelector(".nav-menu");


//Displays dropdown content
dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.add("show");
});

//Hides dropdown content if user clicks away
window.addEventListener("click", (e) => {
    if(e.target != dropdownBtn && e.target != dropdownLinks) {
        dropdownContent.classList.remove("show");
    };
});