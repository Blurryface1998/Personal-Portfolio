let dropdownOne = document.querySelector(".dropdownOne");
let dropdownTwo = document.querySelector(".dropdownTwo");
let myDropdownOne = document.getElementById("myDropdownOne");
let myDropdownTwo = document.getElementById("myDropdownTwo");

dropdownOne.addEventListener("click", () => {
    myDropdownOne.classList.toggle("show");
});

dropdownTwo.addEventListener("click", () => {
    myDropdownTwo.classList.toggle("show");
});

window.addEventListener("click", (e) => {
    if(e.target != dropdownOne) {
        myDropdownOne.classList.remove("show");
    }

    if(e.target != dropdownTwo) {
        myDropdownTwo.classList.remove("show");
    }
});