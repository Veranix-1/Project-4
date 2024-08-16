let random = Math.floor(Math.random() * 10)

let h1 =  document.querySelector("h2")

h1.innerHTML = random;

KeyframeEffect = random;

// let = (a,b)
//  a = ("hello")
//  b = ("world")
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

document.getElementById('n1').textContent = getRandomNumber();
document.getElementById('n2').textContent = getRandomNumber();
document.getElementById('n3').textContent = getRandomNumber();
document.getElementById('n4').textContent = getRandomNumber();
document.getElementById('n5').textContent = getRandomNumber();