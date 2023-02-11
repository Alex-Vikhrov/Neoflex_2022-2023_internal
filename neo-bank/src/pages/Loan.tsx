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
    SuccessfulMessage,
    ToolTip,
} from "../components";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { fetchFormLoan, fetchOffers } from "store/reducers/creditCardSlice";


const Loan: FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const smoothScroll = () => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const [isLoading, setIsLoading] = useState(false);
    const { offers, applicationId } = useAppSelector((state) => state.creditOffersReducer);
    const dispatch = useAppDispatch();

    const handleLoad = () => {
        setIsLoading(true);
    };

    const onSubmitFormLoan = async (values: any) => {
        try {
            setIsLoading(true);
            await dispatch(fetchFormLoan(values));
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmitOffers = async (values: any) => {
        try {
            setIsLoading(true);
            await dispatch(fetchOffers(values));
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    <DescriptionCard applicationId={applicationId} offers={offers} smoothScroll={smoothScroll} />

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
                        offers.length <= 0 ?
                            <section ref={ref}>
                                <CustomizeCard >
                                    <FormLoan isLoading={isLoading} handleLoad={handleLoad} onSubmitFormLoan={onSubmitFormLoan} />
                                    {isLoading && <Loader />}
                                </CustomizeCard>
                            </section> : applicationId ?
                                <section ref={ref}>
                                    <SuccessfulMessage
                                        className="successful-offers"
                                        title={"The preliminary decision has been sent to your email."}
                                        message={"In the letter you can get acquainted with the preliminary decision on the credit card."}
                                    />
                                </section>
                                : <section ref={ref}>
                                    <CreditOffers isLoading={isLoading} offers={offers} onSubmitOffers={onSubmitOffers} />
                                </section>
                    }
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { Loan };