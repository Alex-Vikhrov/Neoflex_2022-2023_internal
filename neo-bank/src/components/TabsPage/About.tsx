import { FC } from 'react';
import './cards.scss';
import { about } from './tabs';

const About: FC = () => {
    return (
        <div className="cards">
            {
                about.map((card) => {
                    return (
                        <div key={card.id} className="cards__card">
                            <i>
                                <img src={card.img} alt={card.alt} />
                            </i>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export { About };