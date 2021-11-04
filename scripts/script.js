const menuButton = document.getElementById('boton');
const nav = document.querySelector('.content-menu')
menuButton.addEventListener('click', openen);
function openen(){
    nav.classList.toggle('active');
}

const menuGroot = document.getElementsByClassName(menuButton);
menuGroot.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    deMenu = event.target.parentNode;
    deMenu.classList.toggle("toonMenu")
}