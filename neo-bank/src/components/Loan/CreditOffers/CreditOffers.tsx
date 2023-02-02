import { Button } from "components";
import { FC } from "react";
import surpriseBox from 'img/SurpriseImage.jpg';
import './creditOffers.scss';

type TOffersProps = {
    offers: Array<any>
}

const CreditOffers: FC<TOffersProps> = ({ offers }) => {
    return (
        <section className="offers">
            {
                offers.map((card) => {
                    return (
                        <div className="offers__card" key={card.id}>
                            <img className="offers__box" src={surpriseBox} alt="box" />
                            <ul className="offers__list">
                                <li className="offers__item">
                                    Requested amount: {card.requestedAmount}
                                </li>
                                <li className="offers__item">
                                    Total amount: 200 000 ₽
                                </li>
                                <li className="offers__item">
                                    For 24 months
                                </li>
                                <li className="offers__item">
                                    Monthly payment: 9 697 ₽
                                </li>
                                <li className="offers__item">
                                    Your rate: 15%
                                </li>
                                <li className="offers__item">
                                    Insurance included
                                    <span className='erros-icon visible'></span>
                                </li>
                                <li className="offers__item">
                                    Salary client
                                    <span className='ok-icon visible'></span>
                                </li>
                            </ul>
                            <Button className="offers__btn">
                                Select
                            </Button>
                        </div>
                    )
                })
            }
        </section>
    );
};

export { CreditOffers };