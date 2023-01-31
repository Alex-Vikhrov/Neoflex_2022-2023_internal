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
    AmountSelect,
} from "../components";
import { about, rates, cashback, faqReceivingCard, faqUsingCard, links, info, footerItem } from "constant";

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
            <Header links={links} />
            <main>
                <div className="wrapper__main">
                    <DescriptionCard smoothScroll={smoothScroll} />

                    <section className="functions-card">
                        <Tabs tabs={[
                            { id: 1, label: 'About card', component: <About about={about} /> },
                            { id: 2, label: 'Rates and conditions', component: <Rates rates={rates} /> },
                            { id: 3, label: 'Cashback', component: <Cashback cashback={cashback} /> },
                            {
                                id: 4, label: 'FAQ', component: [
                                    <FAQ faq={faqReceivingCard} topic='Issuing and receiving a card' />,
                                    <FAQ faq={faqUsingCard} topic='Using a credit card' />,
                                ]
                            }
                        ]} />
                    </section>

                    <InfoGetCard info={info} />

                    {
                        isLoading ? <Loader /> :
                            <section ref={ref}>
                                <CustomizeCard>
                                    {/* <AmountSelect /> */}
                                    <FormLoan handleLoad={handleLoad} />
                                </CustomizeCard>
                            </section>
                    }

                </div>
            </main>
            <Footer footerMenu={footerItem} />
        </div>
    );
};

export { Loan };