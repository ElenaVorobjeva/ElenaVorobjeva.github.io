document.querySelectorAll('.product__slider').forEach((item) => setSlider(item));

function setSlider(container) {
	let sliderPosition = 0;
	const imagesList = container.querySelector('.slider__images');
	const image = container.querySelectorAll('.slider__image');
	const sliderButtonPrev = container.querySelector('.slider__previous');
	const sliderButtonNext = container.querySelector('.slider__next');

	const imageWidth = imagesList.offsetWidth;
	const containerWidth = container.offsetWidth;
	const sliderTrackWidth = image.length * imageWidth - containerWidth;

	sliderButtonPrev.addEventListener('click', function () {
		sliderPosition += imageWidth;
		if (sliderPosition > 0) {
			sliderPosition = 0;
		}
		imagesList.style.transform = `translateX(${-sliderPosition}px)`;
		sliderButtons();
	});

	sliderButtonNext.addEventListener('click', function () {
		sliderPosition -= imageWidth;
		if (sliderPosition < -sliderTrackWidth) {
			sliderPosition = -sliderTrackWidth;
		}
		imagesList.style.transform = `translateX(${-sliderPosition}px)`;
		sliderButtons();
	});

	const sliderButtons = () => {
		if (sliderPosition == 0) sliderButtonPrev.disabled = true;
		else sliderButtonPrev.disabled = false;
		
		if (sliderPosition == -sliderTrackWidth) sliderButtonNext.disabled = true;
		else sliderButtonNext.disabled = false;
	};
	sliderButtons();
}
