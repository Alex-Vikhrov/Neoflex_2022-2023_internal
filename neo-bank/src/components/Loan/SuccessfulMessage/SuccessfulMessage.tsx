import { Button } from "components/UI";
import { FC, ReactNode } from "react";
import './successfulMessage.scss';

type TSuccessfulMessageProps = {
    imaged?: boolean;
    button?: ReactNode;
    src?: string;
    alt?: string;
    title: string;
    message: string;
    className?: string;
};

const SuccessfulMessage: FC<TSuccessfulMessageProps> = ({
    imaged,
    src,
    alt,
    button,
    title,
    message,
    className
}) => {
    return (
        <div className={className || "successful"}>
            {imaged ? <img className="successful__img" src={src} alt={alt} /> : null}
            <h2>{title}</h2>
            <p>{message}</p>
            {button ? button : null}

        </div>
    );
};

export { SuccessfulMessage };