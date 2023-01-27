type TDescription = {
    id: number,
    title: string,
    caption: string,
    content: string,
}

export const description: Array<TDescription> = [
    {
        id: 1,
        title: 'When repaying the full debt up to 160 days.',
        caption: 'Up to 160 days',
        content: 'No percent',

    },
    {
        id: 2,
        title: 'Over the limit willaccrue percent',
        caption: 'Up to 600 000 ₽',
        content: 'Credit limit',
    },
    {
        id: 3,
        title: 'Promotion valid until December 31, 2022.',
        caption: '0 ₽',
        content: 'Card service is free',
    },
];