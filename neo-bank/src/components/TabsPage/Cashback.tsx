import { FC } from 'react';

type TCashbackProps = {
    cashback: any;
};

const Cashback: FC<TCashbackProps> = ({ cashback }) => {
    return (
        <div className="cards">
            {
                cashback.map((item: any, index: number) => {
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