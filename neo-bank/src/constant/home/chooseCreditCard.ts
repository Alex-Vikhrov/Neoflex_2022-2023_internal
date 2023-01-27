import cardImage from 'img/cardImage1.svg';
import cardImage2 from 'img/cardImage2.svg';
import cardImage3 from 'img/cardImage3.svg';
import cardImage4 from 'img/cardImage4.svg';

type TCardImage = {
    id: number;
    img: string;
    alt: string;
};

export const cardImages: Array<TCardImage> = [
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