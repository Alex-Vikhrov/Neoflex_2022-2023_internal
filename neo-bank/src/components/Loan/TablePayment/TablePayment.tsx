import { Table } from "components";
import { FC, useRef, useState, } from "react";
import { CustomizeCard, CustomizeTitle } from "../CustomizeCard";
import './tablePayment.scss';
import arrow from 'img/svg/Arrow_drop_down.svg';
import { ModalActiveButton } from "./ModalActiveButton";
import { TTableRowProps } from "components/UI/Table/Table";

export interface IColumns {
    id: number;
    title: string;
    arrow: string;
    key: string;
    sortable?: boolean;
    onSort?: any;
    accessor?: string;
}

const TablePayment: FC<{
    onTableUpdate: any;
    onSubmitTableDocument: () => Promise<void>,
    table: Array<TTableRowProps>
}> = ({ table, onSubmitTableDocument }) => {

    const columns: Array<IColumns> = [
        { id: 1, title: 'NUMBER', key: 'number', arrow: arrow, },
        { id: 2, title: 'DATE', key: 'date', arrow: arrow, },
        { id: 3, title: 'TOTAL PAYMENT', key: 'totalPayment', arrow: arrow, },
        { id: 4, title: 'INTEREST PAYMENT', key: 'interestPayment', arrow: arrow, },
        { id: 5, title: 'DEBT PAYMENT', key: 'debtPayment', arrow: arrow },
        { id: 6, title: 'REMAINING DEBT', key: 'remainingDebt', arrow: arrow },
    ];

    return (
        <CustomizeCard>
            <div className="payment-wrapper">
                <CustomizeTitle title={"Payment Schedule"} step={3} />
                <Table data={table} columns={columns} />
                <ModalActiveButton onSubmitTableDocument={onSubmitTableDocument} />
            </div>
        </CustomizeCard>
    );
};

export { TablePayment };