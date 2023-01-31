import { FC } from 'react';
import { Button } from '../../UI';
import cardImage from 'img/cardImage1.svg';
import cardImage2 from 'img/cardImage2.svg';
import cardImage3 from 'img/cardImage3.svg';
import cardImage4 from 'img/cardImage4.svg';
import './chooseCard.scss';

type TCardImage = {
    id: number;
    img: string;
    alt: string;
};

const cardImages: Array<TCardImage> = [
    {
        id: 1,
        img: cardImage,
        alt: 'card №1',
    },
    {
        id: 2,
        img: cardImage2,
        alt: 'card №2',
    },
    {
        id: 3,
        img: cardImage3,
        alt: 'card №3',
    },
    {
        id: 4,
        img: cardImage4,
        alt: 'card №4',
    },
];

const ChooseCreditCard: FC = () => {
    return (
        <section className="card">
            <div className="card__choice">
                <h2>
                    <span>Choose the design you like</span>
                    <span>and apply for card right</span>
                    <span>now</span>
                </h2>

                <Button className="card__button">
                    Choose the card
                </Button>
            </div>
            <div className="card__grid">
                {
                    cardImages.map((image) => {
                        return (
                            <figure key={image.id}>
                                <img src={image.img} alt={image.alt} />
                            </figure>
                        );
                    })
                }
            </div>
        </section>
    );
};

export { ChooseCreditCard };