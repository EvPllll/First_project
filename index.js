console.log("Welcome to web page!");

const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    output.innerHTML = "YEAH! YOU IS BEAUTIFUL!"
});
