import { FC, useEffect, useState } from "react";
import {
    ChooseCreditCard,
    FunctionsBank,
    ExchangeRates,
    SwiperNews,
    SubscribeNewsSupport,
    Footer,
    Header,
    World
} from "../components";
import { api } from "api/api";
import { CURRENCY, footerItem, links } from "constant";

const Home: FC = () => {
    const [currency, setCurrency] = useState([]);
    const [news, setNews] = useState([]);

    const fetchCurrency = async () => {
        const response = await api.fetchCurrencyList(CURRENCY).then(function (response: any) {
            return response;
        });

        setCurrency(response);
    };

    const fetchNews = async () => {
        const response = await api.fetchBusinessNews().then(function (response) {
            return response.data.articles;
        });

        setNews(response);
    };

    useEffect(() => {
        fetchCurrency();
        fetchNews();
        setInterval(() => {
            fetchCurrency();
            fetchNews();
        }, api.updateRequest(1000, 60, 15)); // вынести в отдельный метод ! LoadData fetchCurrency()fetchNews(); повторения плохо
    }, []);

    return (
        <div className="wrapper">
            <Header links={links} />
            <main>
                <div className="wrapper__main">
                    <ChooseCreditCard />

                    <FunctionsBank />

                    <ExchangeRates currency={currency} />

                    <World />

                    <SwiperNews news={news} />

                    <SubscribeNewsSupport />
                </div>
            </main>
            <Footer footerMenu={footerItem} />
        </div>
    );
};

export { Home };