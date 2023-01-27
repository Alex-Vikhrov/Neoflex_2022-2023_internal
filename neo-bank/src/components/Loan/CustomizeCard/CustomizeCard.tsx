import { FC, ReactNode } from 'react';

type TCustomize = {
    children: ReactNode;
};

const CustomizeCard: FC<TCustomize> = ({ children }) => {
    return (
        <section className="customize-card">
            {children}
        </section>
    );
};

export { CustomizeCard };
