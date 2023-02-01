import { FC } from 'react';
import './info.scss';

type TInfoGetCardProps = {
    info: any;
}

const InfoGetCard: FC<TInfoGetCardProps> = ({ info }) => {
    return (
        <section className="info-get">
            <h3>How to get a card</h3>
            <div className="info-get__steps">
                {
                    info.map((item: any) => {
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