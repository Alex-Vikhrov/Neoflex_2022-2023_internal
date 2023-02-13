import { Button, Modal } from "components";
import { FC, useState } from "react";
import { ModalContent } from "./ModalContent";
import { Link } from "react-router-dom";

const ModalActiveButton: FC<{ onSubmitTableDocument: () => Promise<void>}> = ({ onSubmitTableDocument }) => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [modalActive_2, setModalActive_2] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
    const handleClick = () => setChecked(!checked);

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
                    title={"Deny application"}
                    description={"You exactly sure, you want to cancel this application?"}
                    button={
                        <>
                            <Button className="deny" onClick={() => setModalActive_2(true)}>
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
            <Modal active={modalActive_2} setModalActive={setModalActive_2}>
                <ModalContent
                    title={"Deny application"}
                    description={"Your application has been deny!"}
                    button={
                        <>
                            <Link
                                className="oops__btn"
                                to='/'
                                onClick={() => {
                                    localStorage.clear();
                                    setModalActive_2(false)
                                }}
                            >
                                Go home
                            </Link>
                        </>
                    }
                    setModalActive={setModalActive_2}
                />
            </Modal>
        </>
    );
};

export { ModalActiveButton };