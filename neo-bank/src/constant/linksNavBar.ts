interface ILinks {
    id: number;
    children: string;
    to?: string;
};

export const links: Array<ILinks> = [
    {
        id: 1,
        children: 'Credit card',
        to: '/loan'
    },
    {
        id: 2,
        children: 'Product',
        to: '/product'
    },
    {
        id: 3,
        children: 'Account',
        to: '/account'
    },
    {
        id: 4,
        children: 'Resources',
        // to: '/resources'
    }
];