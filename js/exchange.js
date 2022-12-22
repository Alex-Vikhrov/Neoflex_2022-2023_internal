let exchangeDataElement = document.getElementById('data');

const CURRENCY = [
	{ currency: 'USD' },
	{ currency: 'EUR' },
	{ currency: 'CAD' },
	{ currency: 'CNY' },
	{ currency: 'CHF' },
	{ currency: 'SGD' },
];

const options = {
	method: 'GET',
	url: 'https://currency-exchange.p.rapidapi.com/exchange',
	headers: {
		'X-RapidAPI-Key': 'f3266eafeamsh9f5e9533ea2e3fcp1cac99jsn8e3dfe659af1',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};

const fetchCurrency = ({ from, to }) => {
	return axios.get(`https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=1.0`, options);
};

const exchangeAll = Promise.allSettled(
	[
		fetchCurrency({ from: 'USD', to: 'RUB' }),
		fetchCurrency({ from: 'EUR', to: 'RUB' }),
		fetchCurrency({ from: 'CAD', to: 'RUB' }),
		fetchCurrency({ from: 'CNY', to: 'RUB' }),
		fetchCurrency({ from: 'CHF', to: 'RUB' }),
		fetchCurrency({ from: 'SGD', to: 'RUB' }),
	]
);

function exchangeEnterInnerHTML() {
	let currency = CURRENCY.map(item => item).map(i => (Object.values(i)));
	let count = 0;
	clearInnerHTML();

	exchangeAll.then(function (response) {
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


