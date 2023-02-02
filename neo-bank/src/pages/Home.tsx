import { FC, useEffect, useState } from "react";
import {
    ChooseCreditCard,
    FunctionsBank,
    ExchangeRates,
    SliderNews,
    SubscribeNewsSupport,
    Footer,
    Header,
    BankMap
} from "../components";
import { api } from "api/api";
import { CURRENCY } from "constant";
import Wrapper from "./Wrapper";

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
        }, api.updateRequest(1000, 60, 15));
    }, []);

    return (
        <Wrapper>
            <ChooseCreditCard />

            <FunctionsBank />

            <ExchangeRates currency={currency} />

            <BankMap />

            <SliderNews news={news} />

            <SubscribeNewsSupport />
        </Wrapper>

        // <div className="wrapper">
        //     <Header />
        //     <main>
        //         <div className="wrapper__main">
        //             <ChooseCreditCard />

        //             <FunctionsBank />

        //             <ExchangeRates currency={currency} />

        //             <BankMap />

        //             <SliderNews news={news} />

        //             <SubscribeNewsSupport />
        //         </div>
        //     </main>
        //     <Footer />
        // </div>
    );
};

export { Home };