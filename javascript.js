const compGuess = Math.floor((Math.random()*10));
const btn = document.getElementById('submit');
btn.addEventListener('click', func);


function func() {
    const x = document.querySelector("#number").value;
    const y = parseInt(x);
    for (let i = 0; i < 5; i++) {
    if (y == compGuess) {
    document.querySelector('#result_comp').textContent = "Yay! The secret number is indeed " + compGuess + ".";
    } else if (y < compGuess) {
        document.querySelector('#result_comp').textContent = "Nope. Too low. Keep guessing.";
    } else {
        document.querySelector('#result_comp').textContent = "Nope. Too high. Keep guessing.";
    }
} 
}
