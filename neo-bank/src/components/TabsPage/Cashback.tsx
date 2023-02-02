import { FC } from 'react';
import { cashback } from './tabs';


const Cashback: FC = () => {
    return (
        <div className="cards">
            {
                cashback.map((item) => {
                    return (
                        <div className="cards__card cashback" key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.percent}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export { Cashback };