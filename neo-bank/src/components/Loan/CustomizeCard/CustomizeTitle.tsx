import { FC } from 'react';

type TTitle = {
    title: string,
    step?: number,
};

const CustomizeTitle: FC<TTitle> = ({ title, step, }) => {
    return (
        <div className='customize-card__title'>
            <h3>{title}</h3>
            <span>Step {step} of 5</span>
        </div>
    );
};

export { CustomizeTitle };