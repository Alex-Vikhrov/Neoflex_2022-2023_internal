import { FC } from 'react';
import TableRow, { TTableRowProps } from './TableRow';
import './table.scss';
import { IThead } from 'components/Loan/TablePayment/TablePayment';

type TTableProps = {
    table: Array<TTableRowProps>;
    thead: Array<IThead>;
    handleSortingChange?: any;
    handleChangeSortTableNumber?: any;
}; 


const Table: FC<TTableProps> = ({ table, thead, handleSortingChange, handleChangeSortTableNumber }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    {thead.map((th) => {
                        return (
                            <th key={th.title}>
                                {th.title}
                                <img className='arrow' src={th.arrow} alt="sort" onClick={th.onSort} />
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {table.map((row) =>
                    <TableRow
                        key={row.number}
                        number={row.number}
                        date={row.date}
                        totalPayment={row.totalPayment}
                        interestPayment={row.interestPayment}
                        debtPayment={row.debtPayment}
                        remainingDebt={row.remainingDebt}
                    />
                )}
            </tbody>
        </table>
    );
};

export { Table };