let input = document.querySelector('#inputColor');
let boxText = document.querySelector('.box-text')
input.addEventListener('input', ()=> {
    console.log(input.value);
    boxText.style.backgroundColor = input.value;
})