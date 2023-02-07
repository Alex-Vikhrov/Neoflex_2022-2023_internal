import { Button, Table, Modal } from "components";
import { FC, useState } from "react";
import { CustomizeCard, CustomizeTitle } from "../CustomizeCard";
import './tablePayment.scss';
// import close from 'img/Close_square.svg';
import arrow from 'img/Arrow_drop_down.svg';
import { ModalContent } from "./ModalContent";
import { TTableRowProps } from "components/UI/Table/TableRow";

export interface IThead {
    id: number;
    title: string;
    arrow: string;
}

const table: Array<TTableRowProps> = [
    {
        number: 0,
        date: '12 01 1998',
        totalPayment: '0',
        interestPayment: '10',
        debtPayment: '250',
        remainingDebt: '35470',
    },
    {
        number: 1,
        date: '12 01 2020',
        totalPayment: '0',
        interestPayment: '10',
        debtPayment: '250',
        remainingDebt: '35470',
    },
    {
        number: 2,
        date: '21 01 2022',
        totalPayment: '0',
        interestPayment: '10',
        debtPayment: '250',
        remainingDebt: '35470',
    },

];

const theadPayment: Array<IThead> = [
    {
        id: 1,
        title: 'NUMBER',
        arrow: arrow,
    },
    {
        id: 2,
        title: 'DATE',
        arrow: arrow,
    },
    {
        id: 3,
        title: 'TOTAL PAYMENT',
        arrow: arrow,
    },
    {
        id: 4,
        title: 'INTEREST PAYMENT',
        arrow: arrow,
    },
    {
        id: 5,
        title: 'DEBT PAYMENT',
        arrow: arrow,
    },
    {
        id: 6,
        title: 'REMAINING DEBT',
        arrow: arrow,
    },
];

const TablePayment: FC = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <CustomizeCard>
            <div className="payment-wrapper">
                <CustomizeTitle title={"Payment Schedule"} step={3} />
                <Table table={table} thead={theadPayment} />
                <div className="payment__btn">
                    <Button className="deny">
                        Deny
                    </Button>
                    <div>
                        <input type="checkbox" id="payment" className="custom-checkbox" />
                        <label htmlFor="payment">I agree with the payment schedule</label>
                        <Button className="send" onClick={() => setModalActive(true)}>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
            {/* <Modal active={modalActive} setModalActive={setModalActive}>
                <div className="modal__wrapper">
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
                </div>
            </Modal> */}
            <Modal active={modalActive} setModalActive={setModalActive}>
                <ModalContent
                    title={"Deny application"}
                    description={"You exactly sure, you want to cancel this application?"}
                    button={
                        <>
                            <Button className="deny">
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
        </CustomizeCard>
    );
};

export { TablePayment };