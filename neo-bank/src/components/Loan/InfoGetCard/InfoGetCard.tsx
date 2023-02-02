import { FC } from 'react';
import './info.scss';

interface IInfo {
    id: number;
    num: number;
    content: string;
};

const info: Array<IInfo> = [
    {
        id: 1,
        num: 1,
        content: 'Fill out an online application - you do not need to visit the bank',
    },
    {
        id: 2,
        num: 2,
        content: `Find out the bank's decision immediately after filling out the application`,
    },
    {
        id: 3,
        num: 3,
        content: 'The bank will deliver the card free of charge, wherever convenient, to your city',
    },
];

const InfoGetCard: FC = () => {
    return (
        <section className="info-get">
            <h3>How to get a card</h3>
            <div className="info-get__steps">
                {
                    info.map((item) => {
                        return (
                            <div key={item.id} className="info-get__wrapper">
                                <div className="info-get__container">
                                    <div className="info-get__num">{item.num}</div><div className="info-get__line"></div>
                                </div>
                                <div className="gap">
                                    <p>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export { InfoGetCard };