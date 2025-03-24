const btnChange = document.getElementById('btn')
const colorText = document.getElementById('color')
// const color = document.querySelector('color');

btnChange.addEventListener('click', function() {
    // Random RGB
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${r},${g},${b})`;
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})