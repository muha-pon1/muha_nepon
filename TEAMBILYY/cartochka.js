const imgs = document.querySelectorAll('.cart img');
let i = 0;

imgs[i].classList.add('active');

document.getElementById('next').onclick = () => {
    imgs[i].classList.remove('active');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('active');
};

document.getElementById('prev').onclick = () => {
    imgs[i].classList.remove('active');
    i = (i - 1 + imgs.length) % imgs.length;
    imgs[i].classList.add('active');
};