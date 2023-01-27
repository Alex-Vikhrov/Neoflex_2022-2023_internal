interface ICashback {
    id: number;
    title: string;
    percent: string;
};

export const cashback: Array<ICashback> = [
    {
        id: 1,
        title: 'For food delivery, cafes and restaurants',
        percent: '5%',
    },
    {
        id: 2,
        title: 'In supermarkets with our subscription',
        percent: '5%',
    },
    {
        id: 3,
        title: `In clothing stores and children's goods`,
        percent: '2%',
    },
    {
        id: 4,
        title: 'Other purchases and payment of services and fines',
        percent: '1%',
    },
    {
        id: 5,
        title: 'Shopping in online stores',
        percent: 'up to 3%',
    },
    {
        id: 6,
        title: 'Purchases from our partners',
        percent: '30%',
    },
];