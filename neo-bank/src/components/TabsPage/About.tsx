import { FC } from 'react';

type TAboutProps = {
    about: Array<any>/* [{ id: number, img: string, alt: string, title: string | number, description: string | number }] */;
};

const About: FC<TAboutProps> = ({ about }) => {
    return (
        <div className="cards">
            {
                about.map((card: any) => {
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