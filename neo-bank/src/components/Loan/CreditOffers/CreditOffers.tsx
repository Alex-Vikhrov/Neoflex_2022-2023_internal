import { Button, Loader } from "components";
import { FC } from "react";
import surpriseBox from 'img/SurpriseImage.jpg';
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

    return (
        <>
            <div className={isLoading ? "offers__card load" : "offers__card"}>
                <img className="offers__box" src={surpriseBox} alt="box" />
                <ul className="offers__list">
                    <li className="offers__item">
                        Requested amount: {requestedAmount} ₽
                    </li>
                    <li className="offers__item">
                        Total amount: {totalAmount} ₽
                    </li>
                    <li className="offers__item">
                        For {term} months
                    </li>
                    <li className="offers__item">
                        Monthly payment: {monthlyPayment} ₽
                    </li>
                    <li className="offers__item">
                        Your rate: {rate}%
                    </li>
                    <li className="offers__item">
                        Insurance included
                        <span className={isInsuranceEnabled ? 'ok-icon visible' : 'errors-icon visible'}></span>
                    </li>
                    <li className="offers__item">
                        Salary client
                        <span className={isSalaryClient ? 'ok-icon visible' : 'errors-icon visible'}></span>
                    </li>
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