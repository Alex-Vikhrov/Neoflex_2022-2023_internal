import { FC, ReactNode } from "react";
import './button.scss';

type TButton = {
    id?: string,
    children: string | ReactNode,
    type?: "button" | "submit" | "reset",
    onClick?: () => void,
    className?: string,
    disabled?: boolean;
}

const Button: FC<TButton> = ({ children, type, onClick, className, id, disabled }) => {
    return (
        <button
            id={id}
            className={className || "menu__button-hamburger"}
            type={type || 'button'}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export { Button };