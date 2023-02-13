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
    sortable: boolean;
    onSort?: any;
}

const TablePayment: FC<{
    onTableUpdate: any;
    onSubmitTableDocument: () => Promise<void>,
    table: Array<TTableRowProps>
}> = ({ onTableUpdate, table, onSubmitTableDocument }) => {
    // const [sortField, setSortField] = useState("");
    // const [order, setOrder] = useState("asc");

    const [sorting, setSorting] = useState({
        isNumberSorted: false,
        isDateSort: false,
        isInterestPayment: false,
    });

    const sortTable = () => {
        if (sorting.isNumberSorted) {
            const sort = table.sort((a, b) => a.number - b.number);
            onTableUpdate([...sort]);
        } else {
            const sort = table.sort((a, b) => b.number - a.number);
            onTableUpdate([...sort]);
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
            const sort = table.sort((a, b) => a.interestPayment - b.interestPayment);
            onTableUpdate([...sort]);
        } else {
            const sort = table.sort((a, b) => b.interestPayment - a.interestPayment);
            onTableUpdate([...sort]);
        }
        setSorting((prevFilters) => {
            return {
                ...prevFilters,
                isInterestPayment: !prevFilters.isInterestPayment
            }
        })
    };

    const theadPayment: Array<IThead> = [
        { id: 1, title: 'NUMBER', arrow: arrow, onSort: sortTable, sortable: true },
        { id: 2, title: 'DATE', arrow: arrow, sortable: true },
        { id: 3, title: 'TOTAL PAYMENT', arrow: arrow, sortable: true },
        { id: 4, title: 'INTEREST PAYMENT', arrow: arrow, onSort: sortTable_INTEREST_PAYMENT, sortable: true },
        { id: 5, title: 'DEBT PAYMENT', arrow: arrow, sortable: true },
        { id: 6, title: 'REMAINING DEBT', arrow: arrow, sortable: true },
    ];

    // const handleSorting = (sortField: string, sortOrder: string) => {
    //     if (sortField) {
    //         const sorted = [...table].sort((a: any, b: any) => {
    //             return (
    //                 a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
    //                     numeric: true,
    //                 }) * (sortOrder === "asc" ? 1 : -1)
    //             );
    //         });
    //         onTableUpdate(sorted);
    //     }
    // };

    // const handleSortingChange = (title: string) => {
    //     const sortOrder = title === sortField && order === "asc" ? "desc" : "asc";
    //     setSortField(title);
    //     setOrder(sortOrder);
    //     handleSorting(title, sortOrder);
    // };

    // const handleChangeSortTableNumber = (sortField: any, sortOrder: any) => {
    //     if (sortField) {
    //         const sorted = [...table].sort((a: any, b: any) => {
    //             if (a[sortField] === null) return 1;
    //             if (b[sortField] === null) return -1;
    //             if (a[sortField] === null && b[sortField] === null) return 0;
    //             return (
    //                 a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
    //                     numeric: true,
    //                 }) * (sortOrder === "asc" ? 1 : -1)
    //             );
    //         });
    //         onTableUpdate(sorted);
    //     }
    // };

    return (
        <CustomizeCard>
            <div className="payment-wrapper">
                <CustomizeTitle title={"Payment Schedule"} step={3} />
                <Table
                    table={table}
                    thead={theadPayment}
                    // handleSortingChange={handleSortingChange}
                    // handleChangeSortTableNumber={handleChangeSortTableNumber}
                />
                <ModalActiveButton onSubmitTableDocument={onSubmitTableDocument} />
            </div>
        </CustomizeCard>
    );
};

export { TablePayment };