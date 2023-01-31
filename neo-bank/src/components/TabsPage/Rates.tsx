import { IRates } from 'constant';
import { FC } from 'react';
import './rates.scss';

type TRatesProps = {
    rates: Array<IRates>;
};

const Rates: FC<TRatesProps> = ({ rates }) => {
    return (
        <div className="rates">
            <nav className="rates__nav">
                <ul className="rates__list">
                    {
                        rates.map((item) => {
                            return (
                                <li className="rates__item" key={item.id}>
                                    <h3>{item.title}</h3>
                                    <p>
                                        {item.description}
                                        <span>{item.aside}</span>
                                    </p>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </div>
    );
};

export { Rates };