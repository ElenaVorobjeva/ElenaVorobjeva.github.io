const button = document.querySelector('.product__add-button');
const quantity = document.querySelector('.product__quantity');
const quantitySpan = quantity.querySelector('span');


button.addEventListener('click', function () {

	button.classList.add('product__add-button_not-visible');
	quantity.classList.add('product__quantity_flex');
	quantitySpan.innerHTML = 1;
});

document.querySelector('.quantity__minus').addEventListener('click', function () {
	let spanText = quantitySpan.innerHTML;
	let maxQuantity = quantitySpan.dataset.quantity;
	if (spanText == maxQuantity) document.querySelector('.quantity__plus').disabled = false;
	if (spanText > 1) quantitySpan.innerHTML = +spanText - 1;
	else if (spanText == 1) {
		button.classList.remove('product__add-button_not-visible');
		quantity.classList.remove('product__quantity_flex');
	}
});

document.querySelector('.quantity__plus').addEventListener('click', function () {
	let spanText = quantitySpan.innerHTML;
	let maxQuantity = quantitySpan.dataset.quantity;
	if (spanText < maxQuantity) quantitySpan.innerHTML = +spanText + 1;
	if (spanText == maxQuantity - 1) {
		document.querySelector('.quantity__plus').disabled = true;
	}
});