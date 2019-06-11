// Your code goes here

const someText = document.querySelector('body');

const container = document.querySelector(".home");
container.addEventListener("mouseover", event => {
  event.target.style.border = "red solid 1px";
});

const container1 = document.querySelector(".home");
container.addEventListener("mouseout", event => {
  event.target.style.border = "";
});

window.addEventListener('load', () => {
	alert('Loaded');
});

window.addEventListener('cut', () => {
	alert('Nope');
});

window.addEventListener('copy', () => {
	alert('Nope');
});

window.addEventListener('wheel', () => {
	alert('We scrolling! Use your arrow keys.');
});

window.addEventListener('keydown', () => {
	someText.style.color = 'purple';
});

window.addEventListener('keyup', () => {
	someText.style.color = 'black';
});


