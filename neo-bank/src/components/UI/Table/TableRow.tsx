import { FC } from "react";
import './table.scss';

export interface TTableRowProps {
    number: number;
    date: string;
    totalPayment: number;
    interestPayment: number;
    debtPayment: number;
    remainingDebt: number;
};

const TableRow: FC<TTableRowProps> = ({
    number,
    date,
    totalPayment,
    interestPayment,
    debtPayment,
    remainingDebt
}) => {
    return (
        <tr>
            <td data-label="NUMBER">
                {number}
            </td>
            <td data-label="DATE">
                {date}
            </td>
            <td data-label="TOTAL PAYMENT">
                {totalPayment}
            </td>
            <td data-label="INTEREST PAYMENT">
                {interestPayment}
            </td>
            <td data-label="DEBT PAYMENT">
                {debtPayment}
            </td>
            <td data-label="REMAINING DEBT">
                {remainingDebt}
            </td>
        </tr>
    );
};

export default TableRow;