const tema = document.querySelector('.tema');

function changeTheme() {
    document.body.classList.toggle('dark');
}

tema.onclick = changeTheme;