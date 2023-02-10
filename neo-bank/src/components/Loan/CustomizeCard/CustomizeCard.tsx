import { FC, ReactNode } from 'react';
import './customize.scss';

type TCustomize = {
    children: ReactNode;
};

const CustomizeCard: FC<TCustomize> = ({children }) => {
    return (
        <section className={"customize-card"} >
            {children}
        </section>
    );
};

export { CustomizeCard };
