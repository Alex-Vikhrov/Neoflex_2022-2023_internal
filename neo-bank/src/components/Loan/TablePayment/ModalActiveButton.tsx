import { Button, Modal } from "components";
import { FC, useState } from "react";
import { ModalContent } from "./ModalContent";
import { Link } from "react-router-dom";

const ModalActiveButton: FC<{ onSubmitTableDocument: () => Promise<void> }> = ({ onSubmitTableDocument }) => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState({
        title: 'Deny application',
        description: 'You exactly sure, you want to cancel this application?',
        buttoned: false
    });
    const [checked, setChecked] = useState<boolean>(false);
    
    const handleClick = () => setChecked(!checked);

    const handleDenyClick = () => {
        setModalContent({
            title: 'Deny application',
            description: 'Your application has been denied!',
            buttoned: true,
        });
    };

    return (
        <>
            <div className="payment__btn">
                <Button className="deny" onClick={() => setModalActive(true)}>
                    Deny
                </Button>
                <div>
                    <input type="checkbox" id="payment" className="custom-checkbox" onChange={handleClick} checked={checked} />
                    <label htmlFor="payment" className="label-checkbox">I agree with the payment schedule</label>
                    <Button disabled={!checked} className={!checked ? "send disabled" : "send"} onClick={() => onSubmitTableDocument()}>
                        Send
                    </Button>
                </div>
            </div>
            <Modal active={modalActive} setModalActive={setModalActive}>
                <ModalContent
                    title={modalContent.title}
                    description={modalContent.description}
                    button={
                        <>
                            {
                                modalContent.buttoned ? <Link
                                    className="oops__btn"
                                    to='/'
                                    onClick={() => {
                                        localStorage.clear();
                                        setModalActive(false);
                                    }}
                                >
                                    Go home

                                </Link> : <>
                                    <Button className="deny" onClick={handleDenyClick}>
                                        Deny
                                    </Button>
                                    <Button className="send" onClick={() => setModalActive(false)}>
                                        Cancel
                                    </Button>
                                </>
                            }
                        </>
                    }
                    setModalActive={setModalActive}
                />
            </Modal>
        </>
    );
};

export { ModalActiveButton };