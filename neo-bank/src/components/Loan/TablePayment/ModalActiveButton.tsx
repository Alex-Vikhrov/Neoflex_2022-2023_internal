import { Button, Modal } from "components";
import { FC, useState } from "react";
import close from 'img/Close_square.svg';
import { ModalContent } from "./ModalContent";

const ModalActiveButton: FC = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <div className="payment__btn">
                <Button className="deny" onClick={() => setModalActive(true)}>
                    Deny
                </Button>
                <div>
                    <input type="checkbox" id="payment" className="custom-checkbox" />
                    <label htmlFor="payment">I agree with the payment schedule</label>
                    <Button className="send">
                        Send
                    </Button>
                </div>
            </div>
            <Modal active={modalActive} setModalActive={setModalActive}>
                <ModalContent
                    title={"Deny application"}
                    description={"You exactly sure, you want to cancel this application?"}
                    button={
                        <>
                            <Button className="deny" >
                                Deny
                            </Button>
                            <Button className="send" onClick={() => setModalActive(false)}>
                                Cancel
                            </Button>
                        </>
                    }
                    setModalActive={setModalActive}
                />
            </Modal>
        </>
    );
};

export { ModalActiveButton };

 {/* <div className="modal__wrapper">
                    <div className="modal__title">
                        <h2>Deny application</h2>
                        <img src={close} alt="close" onClick={() => setModalActive(false)} />
                    </div>
                    <p className="modal__description">You exactly sure, you want to cancel this application?</p>
                    <div className="modal__btn">
                        <Button className="deny">
                            Deny
                        </Button>
                        <Button className="send" onClick={() => setModalActive(false)}>
                            Cancel
                        </Button>
                    </div>
                </div> */}