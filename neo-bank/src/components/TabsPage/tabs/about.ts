import Money from 'img/svg/Money_duotone.svg';
import Calendar from 'img/svg/Calendar_duotone.svg';
import Clock from 'img/svg/Clock_duotone.svg';
import Bag from 'img/svg/Bag_duotone.svg';
import CreditCard from 'img/svg/CreditCard_duotone.svg';

export interface IAbout {
    id: number;
    img: string;
    alt: string;
    title: string;
    description: string;
};

export const about: Array<IAbout> = [
    {
        id: 1,
        img: Money,
        alt: 'Money',
        title: 'Up to 50 000 ₽',
        description: 'Cash and transfers without commission and percent',
    },
    {
        id: 2,
        img: Calendar,
        alt: 'Calendar',
        title: 'Up to 160 days',
        description: 'Without percent on the loan',
    },
    {
        id: 3,
        img: Clock,
        alt: 'Clock',
        title: 'Free delivery',
        description: 'We will deliver your card by courier at a convenient place and time for you',
    },
    {
        id: 4,
        img: Bag,
        alt: 'Bag',
        title: 'Up to 12 months',
        description: 'No percent. For equipment, clothes and other purchases in installments',
    },
    {
        id: 5,
        img: CreditCard,
        alt: 'CreditCard',
        title: 'Convenient deposit and withdrawal',
        description: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
    },
];