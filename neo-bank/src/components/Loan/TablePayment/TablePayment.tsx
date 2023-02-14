import { Table } from "components";
import { FC, useRef, useState, } from "react";
import { CustomizeCard, CustomizeTitle } from "../CustomizeCard";
import './tablePayment.scss';
import arrow from 'img/Arrow_drop_down.svg';
import { ModalActiveButton } from "./ModalActiveButton";
import { TTableRowProps } from "components/UI/Table/TableRow";

export interface IThead {
    id: number;
    title: string;
    arrow: string;
    sortable?: boolean;
    onSort?: any;
    accessor?: string;
}

const TablePayment: FC<{
    onTableUpdate: any;
    onSubmitTableDocument: () => Promise<void>,
    table: Array<TTableRowProps>
}> = ({ onTableUpdate, table, onSubmitTableDocument }) => {
    const [sorting, setSorting] = useState({
        isNumberSorted: false,
        isDateSort: false,
        isTotalPayment: false,
        isInterestPayment: false,
    });

    //TO DO я исправлю этот ужас 
    const sortTable = () => {
        if (sorting.isNumberSorted) {
            const sort = [...table].sort((a, b) => a.number - b.number);
            onTableUpdate(sort);
        } else {
            const sort = [...table].sort((a, b) => b.number - a.number);
            onTableUpdate(sort);
        }
        setSorting((prevFilters) => {
            return {
                ...prevFilters,
                isNumberSorted: !prevFilters.isNumberSorted
            }
        })
    };

    const sortTable_INTEREST_PAYMENT = () => {

        if (sorting.isInterestPayment) {
            const sort = [...table].sort((a, b) => a.interestPayment - b.interestPayment);
            onTableUpdate(sort);
        } else {
            const sort = [...table].sort((a, b) => b.interestPayment - a.interestPayment);
            onTableUpdate(sort);
        }
        setSorting((prevFilters) => {
            return {
                ...prevFilters,
                isInterestPayment: !prevFilters.isInterestPayment
            }
        })
    };

    const sortTableTotalPayment = () => {
        if (sorting.isTotalPayment) {
            const sort = [...table].sort((a, b) => a.totalPayment - b.totalPayment);
            onTableUpdate(sort);
        } else {
            const sort = [...table].sort((a, b) => b.totalPayment - a.totalPayment);
            onTableUpdate(sort);
        }
        setSorting((prevFilters) => {
            return {
                ...prevFilters,
                isTotalPayment: !prevFilters.isTotalPayment
            }
        })
    };

    const theadPayment: Array<IThead> = [
        { id: 1, title: 'NUMBER', arrow: arrow, onSort: sortTable },
        { id: 2, title: 'DATE', arrow: arrow, },
        { id: 3, title: 'TOTAL PAYMENT', arrow: arrow, onSort: sortTableTotalPayment },
        { id: 4, title: 'INTEREST PAYMENT', arrow: arrow, onSort: sortTable_INTEREST_PAYMENT },
        { id: 5, title: 'DEBT PAYMENT', arrow: arrow },
        { id: 6, title: 'REMAINING DEBT', arrow: arrow },
    ];

    return (
        <CustomizeCard>
            <div className="payment-wrapper">
                <CustomizeTitle title={"Payment Schedule"} step={3} />
                <Table
                    table={table}
                    thead={theadPayment}
                />
                <ModalActiveButton onSubmitTableDocument={onSubmitTableDocument} />
            </div>
        </CustomizeCard>
    );
};

export { TablePayment };