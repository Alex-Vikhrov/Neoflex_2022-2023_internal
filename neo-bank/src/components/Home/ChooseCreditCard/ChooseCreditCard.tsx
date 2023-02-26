import { FC } from 'react';
import cardImage from 'img/svg/cardImage1.svg';
import cardImage2 from 'img/svg/cardImage2.svg';
import cardImage3 from 'img/svg/cardImage3.svg';
import cardImage4 from 'img/svg/cardImage4.svg';
import './chooseCard.scss';
import { Link } from 'react-router-dom';
import { RouteNames } from 'router/routes';

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

                <Link className="card__button" to={RouteNames.LOAN}>
                    Choose the card
                </Link>
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