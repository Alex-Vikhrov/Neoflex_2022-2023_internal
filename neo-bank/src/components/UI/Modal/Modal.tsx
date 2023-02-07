import { FC, ReactNode } from "react";
import './modal.scss';

type TModalProps = {
    active: boolean;
    setModalActive: any;
    children: ReactNode | string;
}

const Modal: FC<TModalProps> = ({ active, setModalActive, children }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div
                className={active ? 'modal__content active' : 'modal__content'}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export { Modal };