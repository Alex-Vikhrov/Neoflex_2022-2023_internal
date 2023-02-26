import { Button, Loader } from "components";
import { FC } from "react";
import surpriseBox from 'img/jpg/SurpriseImage.jpg';
import './creditOffers.scss';

type TOffersProps = {
    isLoading?: boolean;
    onSubmitOffers?: any;
    requestedAmount: number,
    totalAmount: number,
    term: number,
    monthlyPayment: number,
    rate: number,
    isInsuranceEnabled: boolean,
    isSalaryClient: boolean,
    applicationId: number,
}

const CreditOffers: FC<TOffersProps> = ({
    isLoading,
    requestedAmount,
    totalAmount,
    term,
    monthlyPayment,
    rate,
    isInsuranceEnabled,
    isSalaryClient,
    applicationId,
    onSubmitOffers
}) => {
    const values = {
        requestedAmount,
        totalAmount,
        term,
        monthlyPayment,
        rate,
        isInsuranceEnabled,
        isSalaryClient,
        applicationId,
    };

    const offers = [
        `Requested amount: ${requestedAmount} ₽`,
        `Total amount: ${totalAmount} ₽`,
        `For ${term} months`,
        `Monthly payment: ${monthlyPayment} ₽`,
        `Your rate: ${rate}%`,
        `Insurance included`,
        `Salary client`
    ];

    return (
        <>
            <div className={isLoading ? "offers__card load" : "offers__card"}>
                <img className="offers__box" src={surpriseBox} alt="box" />
                <ul className="offers__list">
                    {offers.map((offer, index) => {
                        let icon = null;
                        if (index === offers.length - 2) {
                            icon = <span className={isInsuranceEnabled ? 'ok-icon visible' : 'errors-icon visible'}></span>
                        } else if (index === offers.length - 1) {
                            icon = <span className={isSalaryClient ? 'ok-icon visible' : 'errors-icon visible'}></span>
                        }
                        return (
                            <li className="offers__item" key={index}>
                                {offer} {icon}
                            </li>
                        )
                    })}
                </ul>
                <Button className="offers__btn" onClick={() => onSubmitOffers(values)}>
                    Select
                </Button>
            </div>
            {isLoading && <Loader />}
        </>
    );
};

export { CreditOffers };