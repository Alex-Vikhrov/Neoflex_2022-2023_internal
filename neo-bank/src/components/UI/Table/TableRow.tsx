import { FC } from "react";
import './table.scss';

export interface TTableRowProps {
    number: number;
    date: string;
    totalPayment: string;
    interestPayment: string;
    debtPayment: string;
    remainingDebt: string;
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
            <td>
                {number}
            </td>
            <td>
                {date}
            </td>
            <td>
                {totalPayment}
            </td>
            <td>
                {interestPayment}
            </td>
            <td>
                {debtPayment}
            </td>
            <td>
                {remainingDebt}
            </td>
        </tr>
    );
};

export default TableRow;