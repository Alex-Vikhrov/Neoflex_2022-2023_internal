import { FC } from 'react';
import './rates.scss';
import { rates } from './tabs';


const Rates: FC = () => {
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