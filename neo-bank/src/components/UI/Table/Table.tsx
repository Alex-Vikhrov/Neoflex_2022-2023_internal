import { IColumns } from "components/Loan/TablePayment/TablePayment";
import { FC, useState } from "react";
import './table.scss';

export interface TTableRowProps {
    number: number;
    date: string;
    totalPayment: number;
    interestPayment: number;
    debtPayment: number;
    remainingDebt: number;
};

type TTableProps = {
    data: Array<TTableRowProps>;
    columns: Array<IColumns>;
};

const Table: FC<TTableProps> = ({ data, columns }) => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState("asc");

    const sortedData = data.sort((a, b) => {
        if (sortColumn) {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
            if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
    });

    const handleSort = (column: any) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };

    return (
        <table className='table'>
            <thead>
                <tr>
                    {columns.map((column) =>
                        <th key={column.key} onClick={() => handleSort(column.key)}>
                            {column.title}
                            {sortColumn === column.key ?
                                <img
                                    className={sortDirection === "asc" ? 'arrow transform' : 'arrow'}
                                    src={column.arrow}
                                    alt="sort"
                                />
                                :
                                <img className='arrow' src={column.arrow} alt="sort" />
                            }
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row: any, index: number) => (
                    <tr key={index}>
                        {columns.map((column) =>
                            <td
                                data-label={column.title}
                                key={column.key}
                            >
                                {row[column.key]}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export { Table };