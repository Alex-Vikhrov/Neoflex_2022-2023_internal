import { FC } from 'react';
import bank from 'img/bank.svg';
import { CURRENCY } from 'constant';
import './exchangeRates.scss';

type TEchangeProps = {
    currency: Array<any>;
};

const ExchangeRates: FC<TEchangeProps> = ({ currency }) => {
    let curren = CURRENCY.map(item => item).map(i => i.from);
    let count = 0;
    console.log(currency.map((item) => console.log(item)));

    return (
        <section className="courses">
            <div className="courses__today">
                <h3>Exchange rate in internet bank</h3>
                <time dateTime="2022-08-09">Update every 15 minutes, MSC 09.08.2022</time>
            </div>
            <span>Currency</span>
            <div className="courses__case">
                <ul className="courses__list" id="data">
                    {
                        currency.map((item, index: number) => {
                            console.log(item);
                            
                            return (
                                <li className="courses__item" key={index}>
                                    {curren[count++]}:<span>{Number.parseFloat(item.value.data).toFixed(2)}</span>
                                </li>
                            );
                        })
                    }
                </ul>
                <figure>
                    <img className="courses__bank" src={bank} alt="bank" />
                </figure>
            </div>
            <div className="courses__all">
                <p>All courses</p>
            </div>
        </section>
    );
};

export { ExchangeRates };