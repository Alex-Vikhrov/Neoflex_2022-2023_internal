import verctor from 'img/Vector.svg';

type TFunctionsList = {
    id: number;
    icon: string;
    children: string;
}

export const functionsList: Array<TFunctionsList> = [
    {
        id: 1,
        icon: verctor,
        children: 'Powerfull online protection.',
    },
    {
        id: 2,
        icon: verctor,
        children: 'Cashback without borders.',
    },
    {
        id: 3,
        icon: verctor,
        children: 'Personal design',
    },
    {
        id: 4,
        icon: verctor,
        children: 'Work anywhere in the world',
    },
];