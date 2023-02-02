import { FC, useRef, useState } from "react";
import {
    About,
    Cashback,
    DescriptionCard,
    FAQ,
    Footer,
    Header,
    InfoGetCard,
    Loader,
    Rates,
    Tabs,
    FormLoan,
    CustomizeCard,
    CreditOffers,
    Application,
} from "../components";

const offers = [
    {
        id: 1,
        list: [
            {
                li: 'Requested amount'
            }
        ],
        requestedAmount: '200 000 ₽',
    },
    {
        id: 2,
        list: [
            {
                li: 'Requested amount'
            }
        ],
        requestedAmount: '210 000 ₽',
    },
    {
        id: 3,
        list: [
            {
                li: 'Requested amount'
            }
        ],
        requestedAmount: '220 000 ₽',
    },
    {
        id: 4,
        list: [
            {
                li: 'Requested amount'
            }
        ],
        requestedAmount: '230 000 ₽',
    },
];

const Loan: FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const smoothScroll = () => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    const [isLoading, setIsLoading] = useState(false);

    const handleLoad = () => {
        setIsLoading(true);
    };

    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    <DescriptionCard smoothScroll={smoothScroll} />

                    <section className="functions-card">
                        <Tabs tabs={[
                            { id: 1, label: 'About card', component: <About /> },
                            { id: 2, label: 'Rates and conditions', component: <Rates /> },
                            { id: 3, label: 'Cashback', component: <Cashback /> },
                            { id: 4, label: 'FAQ', component: <FAQ />, }
                        ]} />
                    </section>

                    <InfoGetCard />

                    {
                        isLoading ? <Loader /> :
                            <section ref={ref}>
                                <CustomizeCard>
                                    <FormLoan handleLoad={handleLoad} />
                                </CustomizeCard>
                            </section>
                    }

                    {/* <CreditOffers offers={offers} />

                    <Application /> 4 модуль */}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { Loan };