import { api } from './api.js';

let exchangeDataElement = document.getElementById('data');

const CURRENCY = [
	{ currency: 'USD' },
	{ currency: 'EUR' },
	{ currency: 'CAD' },
	{ currency: 'CNY' },
	{ currency: 'CHF' },
	{ currency: 'SGD' },
];

function exchangeEnterInnerHTML() {
	let currency = CURRENCY.map(item => item).map(i => (Object.values(i)));
	let count = 0;
	clearInnerHTML();

	api.fetchDefaultExchanges().then(function (response) {
		response.map((item) => {
			let content = exchangeDataElement.innerHTML;

			content += `
			<li class="courses__item">
			${currency[count]}:<span>${Number.parseFloat(item.value.data).toFixed(2)}</span>
			</li>`;
			count += 1;

			exchangeDataElement.innerHTML = content;
		});
	});
}

function clearInnerHTML() {
	exchangeDataElement.innerHTML = "";
}

exchangeEnterInnerHTML();

setInterval(() => {
	exchangeEnterInnerHTML();
}, 60 * 1000 * 15);


