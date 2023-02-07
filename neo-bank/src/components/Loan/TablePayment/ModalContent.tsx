import { FC, ReactNode } from "react";
import close from 'img/Close_square.svg';

type TModalContentProps = {
    title: string;
    description: string;
    button: ReactNode;
    setModalActive: any;
}

const ModalContent: FC<TModalContentProps> = ({ title, description, button, setModalActive }) => {
    return (
        <div className="modal__wrapper">
            <div className="modal__title">
                <h2>{title}</h2>
                <img src={close} alt="close" onClick={() => setModalActive(false)} />
            </div>
            <p className="modal__description">{description}</p>
            <div className="modal__btn">
                {button}
            </div>
        </div>
    );
};

export { ModalContent };