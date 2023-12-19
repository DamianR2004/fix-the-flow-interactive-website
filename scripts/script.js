//  PLUS button
const plusButton = document.querySelector(".add-button");
const deDialog = document.querySelector("dialog:nth-of-type(1)");


function openDialog() {
    deDialog.showModal();
}

plusButton.addEventListener("click", openDialog);



// MENU button
const menuButton = document.querySelector(".left button");
const hetMenu = document.querySelector(".hoofdmenu");

function openMenu() {
    hetMenu.classList.toggle("open");
    hetMenu.classList.toggle("close");
}

menuButton.addEventListener("click", openMenu);




let contactbutton = document.querySelector(".contact-button");
let contactdialog = document.querySelector(".upper-footer dialog");


contactbutton.addEventListener("click", () => {
    contactdialog.showModal();
});


