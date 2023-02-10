import { Button } from "components/UI";
import { FC } from "react";
import './successfulMessage.scss';

type TSuccessfulMessageProps = {
    imaged?: boolean;
    button?: boolean;
    src?: string;
    alt?: string;
    title: string;
    message: string;
    className?: string;
};

const SuccessfulMessage: FC<TSuccessfulMessageProps> = ({ imaged, button, title, message, className }) => {
    return (
        <div className={className || "successful"}>
            {imaged ? <img src="" alt="" /> : null}
            <h2>{title}</h2>
            <p>{message}</p>
            {button ? <Button>View other offers of our bank</Button> : null}

        </div>
    );
};

export { SuccessfulMessage };