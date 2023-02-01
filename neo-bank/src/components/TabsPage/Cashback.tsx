import { ICashback } from 'constant';
import { FC } from 'react';

type TCashbackProps = {
    cashback: Array<ICashback>;
};

const Cashback: FC<TCashbackProps> = ({ cashback }) => {
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