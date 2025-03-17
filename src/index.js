import "./styles.css";

const dropdownBtn = document.querySelector(".btn-dropdown");

//Div that contains all the dropdown links
const dropdownContent = document.querySelector(".dropdown-content");

const dropdownLinks = document.querySelector(".nav-menu");


//Displays dropdown content when button is clicked
dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.add("show");
});

//Hides dropdown content if user clicks away
window.addEventListener("click", (e) => {
    if(e.target != dropdownBtn && e.target != dropdownLinks) {
        dropdownContent.classList.remove("show");
    };
});