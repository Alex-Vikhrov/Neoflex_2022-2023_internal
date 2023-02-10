import { Button, Loader } from "components";
import { FC } from "react";
import surpriseBox from 'img/SurpriseImage.jpg';
import './creditOffers.scss';

type TOffersProps = {
    isLoading?: boolean;
    offers: Array<any>;
    onSubmitOffers?: any;
}

const CreditOffers: FC<TOffersProps> = ({ isLoading, offers, onSubmitOffers }) => {
    return (
        <section className={"offers"}>
            {
                offers.map((card, index) => {
                    const offersValue = {
                        applicationId: card.applicationId,
                        requestedAmount: card.requestedAmount,
                        totalAmount: card.totalAmount,
                        monthlyPayment: card.monthlyPayment,
                        rate: card.rate,
                        isInsuranceEnabled: card.isInsuranceEnabled,
                        isSalaryClient: card.isSalaryClient,
                    };

                    return (
                        <div className={isLoading ? "offers__card load" : "offers__card"} key={index}>
                            <img className="offers__box" src={surpriseBox} alt="box" />
                            <ul className="offers__list">
                                <li className="offers__item">
                                    Requested amount: {card.requestedAmount} ₽
                                </li>
                                <li className="offers__item">
                                    Total amount: {card.totalAmount} ₽
                                </li>
                                <li className="offers__item">
                                    For {card.term} months
                                </li>
                                <li className="offers__item">
                                    Monthly payment: {card.monthlyPayment} ₽
                                </li>
                                <li className="offers__item">
                                    Your rate: {card.rate}%
                                </li>
                                <li className="offers__item">
                                    Insurance included
                                    <span className={card.isInsuranceEnabled ? 'ok-icon visible' : 'errors-icon visible'}></span>
                                </li>
                                <li className="offers__item">
                                    Salary client
                                    <span className={card.isSalaryClient ? 'ok-icon visible' : 'errors-icon visible'}></span>
                                </li>
                            </ul>
                            <Button className="offers__btn" onClick={() => onSubmitOffers(offersValue)}>
                                Select
                            </Button>
                        </div>
                    )
                })
            }
            {isLoading && <Loader />}
        </section>
    );
};

export { CreditOffers };