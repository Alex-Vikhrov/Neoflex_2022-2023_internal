import axios, { AxiosPromise, AxiosResponse } from "axios";
import { storage } from "utils";
import { IBusinessNews, ICurrency, ICurrencyParams, IFormApplication, IFormLoan, IOffers, ITableDocument } from "./apiType";

const options = {
  method: 'GET',
  url: 'https://currency-exchange.p.rapidapi.com/exchange',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_CURRENCY_KEY,
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
  }
};

const fetchCurrency = ({ from, to }: ICurrencyParams): AxiosPromise<ICurrency> => {
  return axios.get(`https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=1.0`, options);
};

const fetchCurrencyList = (CURRENCY: ICurrencyParams[]): Promise<PromiseSettledResult<AxiosResponse<ICurrency, any>>[]> => {
  const currency = CURRENCY.map((item) => {
    return fetchCurrency({ from: item.from, to: item.to });
  });

  return Promise.allSettled(currency);
};

const NewsApiKey = process.env.REACT_APP_NEWS_API_KEY;

const fetchBusinessNews = (): AxiosPromise<IBusinessNews> => axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NewsApiKey}`);

const updateRequest = (ms: number, seconds: number, minutes: number): number => {
  return seconds * ms * minutes;
};

const subscribeEmail = (emailValue: string): AxiosPromise<void> => axios.post('http://localhost:8080/email', {
  email: emailValue
});

const applicationId = storage.getItem('applicationId');

const sendFormLoan = (values: IFormLoan): AxiosPromise<void> => axios.post('http://localhost:8080/application', values, { headers: { 'Content-Type': 'application/json' } });
const sendOffers = (values: IOffers): AxiosPromise<void> => axios.post('http://localhost:8080/application/apply', values, { headers: { 'Content-Type': 'application/json' } });
const sendFormApplication = (values: IFormApplication): AxiosPromise<void> => axios.put(`http://localhost:8080/application/registration/${applicationId}`, values);

const fetchTableDocument = (): AxiosPromise<ITableDocument> => axios.get(`http://localhost:8080/admin/application/${applicationId}`);

const sendTableDocument = (): AxiosPromise<void> => axios.post(`http://localhost:8080/document/${applicationId}`);
const sendFileSign = (): AxiosPromise<void> => axios.post(`http://localhost:8080/document/${applicationId}/sign`);
const sendPinCode = (values: any): AxiosPromise<void> => axios.post(`http://localhost:8080/document/${applicationId}/sign/code`, values, { headers: { 'Content-Type': 'application/json' } });

export const api = {
  fetchCurrencyList,
  fetchCurrency,
  fetchBusinessNews,
  updateRequest,
  subscribeEmail,
  sendFormLoan,
  sendOffers,
  sendFormApplication,
  fetchTableDocument,
  sendTableDocument,
  sendFileSign,
  sendPinCode
};