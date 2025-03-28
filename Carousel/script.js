const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const wrap = document.querySelector('.img-wrap');
const imgs = document.querySelectorAll('.img-wrap img');

let idx = 0;

function showImg() {
    if (idx >= imgs.length) idx = 0;
    if (idx < 0) idx = imgs.length - 1;
    wrap.style.transform = `translateX(-${idx * 100}%)`;
}

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        idx++;
        showImg();
    }, 3000)
}

next.addEventListener('click', () => {
    idx++;
    showImg();
});

prev.addEventListener('click', () => {
    idx--;
    showImg();
});

let autoSlide = setInterval(() => {
    idx++;
    showImg();
}, 3000);

showImg();