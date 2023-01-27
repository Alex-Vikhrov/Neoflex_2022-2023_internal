import { FC, ReactNode } from 'react';
import './label.scss';

type TLabelProps = {
    htmlFor: string,
    children: string | ReactNode,
    className: string;
}

const Label: FC<TLabelProps> = ({
    htmlFor,
    children,
    className,
}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={className || 'defaultLabel'}
        >
            {children}
        </label>
    );
};

export { Label }