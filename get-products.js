const url = 'https://store.tildacdn.com/api/tgetproduct/';

document.addEventListener("DOMContentLoaded", function () {
	fetch(url, {
		method: "POST"
	}).then(
		successResponse => {
			if (successResponse.ok) successResponse.json().then(
				data => {
					renderProducts(data);
				}
			);
			else {
				alert("К сожалению, прозошла ошибка. Попробуйте позднее.");
			}
		},
		() => {
			alert("К сожалению, прозошла ошибка. Попробуйте позднее.");
		}
	);
});

function renderProducts(data) {
	document.querySelector(".product__title").innerHTML = data.title;
	document.querySelector(".product__description").innerHTML = data.descr;
	document.querySelector(".product__old-price").innerHTML = data.priceold + '₽';
	document.querySelector(".product__price").innerHTML = data.price + '₽';
	document.querySelector(".product__discount").innerHTML = calcDiscount(data.price, data.priceold);
	let imagesArr = JSON.parse(data.images);
	for (let i in imagesArr) {
		document.querySelector(".slider__images").prepend(
			createElement('img', 'slider__image', { 'src': imagesArr[i]["img"], 'alt': 'Product photo' })
		);
	};
	if (data.quantity > 0)
		document.querySelector(".product__quantity span").setAttribute('data-quantity', data.quantity);
	if (data.quantity === 0) {
		document.querySelector('.product__add-button').classList.add('product__add-button_not-visible');
		document.querySelector('.product__out-of-stock').classList.add('product__out-of-stock_visible');
	}
	if(data.quantity === 1) {
		document.querySelector('.quantity__plus').disabled = true;
	}
}

function calcDiscount(price, oldPrice) {
	let discount = -(100 - Math.round(price * 100 / oldPrice));
	return discount > 0 ? '+' + discount + '%' : discount + '%';
}

function createElement(tag, className, attributes) {
	let element = document.createElement(tag);
	element.className = className;
	for (let i in attributes) {
		element.setAttribute(i, attributes[i]);
	};

	return element;
}