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

const fetchDefaultExchanges = () => {
    return Promise.allSettled(
        [
            fetchCurrency({ from: 'USD', to: 'RUB' }),
            fetchCurrency({ from: 'EUR', to: 'RUB' }),
            fetchCurrency({ from: 'CAD', to: 'RUB' }),
            fetchCurrency({ from: 'CNY', to: 'RUB' }),
            fetchCurrency({ from: 'CHF', to: 'RUB' }),
            fetchCurrency({ from: 'SGD', to: 'RUB' }),
        ]
    );
};

export const api = { fetchDefaultExchanges, fetchCurrency };
