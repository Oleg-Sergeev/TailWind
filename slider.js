let dots = 4;
let sliderElem = document.querySelector('.slider');
let dotElems = sliderElem.querySelectorAll('.slider__dot');
let arrowElems = sliderElem.querySelectorAll('.slider__arrow');
let indicatorElem = sliderElem.querySelector('.slider__indicator');

let autoplayInterval = setInterval(autoPlay, 7000);

dotElems.forEach(dotElem => {

	dotElem.addEventListener('click', _ => {
		pauseAutoplay();

		let newPos = parseInt(dotElem.getAttribute('data-pos'));

		moveTo(newPos);
	})
})

arrowElems.forEach(arrowElem => {
	arrowElem.addEventListener('click', _ => {
		pauseAutoplay();

		let dataOffset = parseInt(arrowElem.getAttribute('data-offset'));

		let newPos = mod(getCurrentPos() + dataOffset, dots);
		
		moveTo(newPos);
	})
})


function getCurrentPos() {
	return parseInt(sliderElem.getAttribute('data-pos'));
}

function moveTo(newPos) {
	let currentPos = parseInt(sliderElem.getAttribute('data-pos'))

	let newDirection = (newPos > currentPos ? 'right' : 'left');
	let currentDirection = (newPos < currentPos ? 'right' : 'left');

	indicatorElem.classList.remove(`slider__indicator--${currentDirection}`);
	indicatorElem.classList.add(`slider__indicator--${newDirection}`);
	sliderElem.setAttribute('data-pos', newPos);
}

function autoPlay() {
	moveTo(mod(getCurrentPos() + 1, dots))
}

function pauseAutoplay() {
	clearInterval(autoplayInterval);

	setTimeout(() => autoplayInterval = setInterval(autoPlay, 7000), 10000);
}

function mod(x, m) {
	return (x % m + m) % m;
}