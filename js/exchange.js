import { api } from './api.js';

let exchangeDataElement = document.getElementById('data');

function exchangeEnterInnerHTML() {
	let count = 0;
	clearInnerHTML();

	api.fetchCurrencyList().then(function (response) {
		response.map((item) => {
			let content = exchangeDataElement.innerHTML;

			content += `
			<li class="courses__item">
			${api.currency[count]}:<span>${Number.parseFloat(item.value.data).toFixed(2)}</span>
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