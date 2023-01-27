import { FC } from 'react';
import bank from 'img/bank.svg';
import { CURRENCY } from 'constant/currency';

type TEchangeProps = {
    currency: Array<string>
}

const ExchangeRates: FC<TEchangeProps> = ({ currency }) => {
    let curren = CURRENCY.map(item => item).map(i => i.from);
    let count = 0;

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
                        currency.map((item: any, index: number) => {
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
                <a href="#">All courses</a>
            </div>
        </section>
    );
};

export { ExchangeRates };