const btnIncrement = document.getElementById("increment");
const numText = document.getElementById("number");
let count = 0;

// btnIncrement.addEventListener('click', () => {
//     count++;
//     numText.innerHTML = count;
// })

// btnIncrement.onclick = () => {
//     count++;
//     numText.innerHTML = count;
// }

// function btnPlus(number = 1) {
//     count += number;
//     numText.innerHTML = count;
// }

const btnPlus = (number = 1) => {
    count += number;
    numText.innerHTML = count;
}

numText.innerHTML = count;