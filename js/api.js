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

const fetchCurrencyList = (CURRENCY) => {
    const currency = CURRENCY.map((item) => {
        return fetchCurrency({ from: item.from, to: item.to });
    });

    return Promise.allSettled(currency);
};

const apiKey = '48c961b42cba45b18db7abaa46e4397c';
const fetchBusinessNews = () => axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);

const updateRequest = (ms, seconds, minutes) => {
    return seconds * ms * minutes;
};

export const api = { fetchCurrencyList, fetchCurrency, fetchBusinessNews, updateRequest };