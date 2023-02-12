import { Button, Table, Modal } from "components";
import { FC, useState } from "react";
import { CustomizeCard, CustomizeTitle } from "../CustomizeCard";
import './tablePayment.scss';
// import close from 'img/Close_square.svg';
import arrow from 'img/Arrow_drop_down.svg';
import { TTableRowProps } from "components/UI/Table/TableRow";
import { ModalActiveButton } from "./ModalActiveButton";

export interface IThead {
    id: number;
    title: string;
    arrow: string;
}

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

const TablePayment: FC<{ table: any}> = ({ table }) => {
    const table1: Array<TTableRowProps> = [
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
    
    return (
        <CustomizeCard>
            <div className="payment-wrapper">
                <CustomizeTitle title={"Payment Schedule"} step={3} />
                <Table table={table1} thead={theadPayment} />
                <ModalActiveButton />
            </div>
        </CustomizeCard>

    );
};

export { TablePayment };