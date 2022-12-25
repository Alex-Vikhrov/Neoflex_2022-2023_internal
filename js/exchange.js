import { api } from './api.js';

let exchangeDataElement = document.getElementById('data');

const CURRENCY = [
	{ from: 'USD', to: 'RUB' },
	{ from: 'EUR', to: 'RUB' },
	{ from: 'CAD', to: 'RUB' },
	{ from: 'CNY', to: 'RUB' },
	{ from: 'CHF', to: 'RUB' },
	{ from: 'SGD', to: 'RUB' },
];

function exchangeEnterInnerHTML() {
	let currency = CURRENCY.map(item => item).map(i => i.from);
	let count = 0;
	clearInnerHTML();

	api.fetchCurrencyList(CURRENCY).then(function (response) {
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
}, api.updateRequest(1000, 60, 15)); // ms, seconds, minuts