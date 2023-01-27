interface ICurrency {
    from: string;
    to: string;
};

export const CURRENCY: Array<ICurrency> = [
    { from: 'USD', to: 'RUB' },
    { from: 'EUR', to: 'RUB' },
    { from: 'CAD', to: 'RUB' },
    { from: 'CNY', to: 'RUB' },
    { from: 'CHF', to: 'RUB' },
    { from: 'SGD', to: 'RUB' },
];