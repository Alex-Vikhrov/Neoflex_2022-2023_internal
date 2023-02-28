import { api } from 'api/api';
import { Layout, SuccessfulMessage, TablePayment } from 'components';
import { FC, useEffect, useState } from 'react';
import { storage } from 'utils';

const LoanDocument: FC = () => {
    const [table, setTable] = useState<Array<any>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchTable = async () => {
        const response = await api.fetchTableDocument().then(function (response: any) {
            return response.data.credit.paymentSchedule;
        });
        setTable(response);
    };

    useEffect(() => {
        fetchTable();
    }, []);


    const onSubmitTableDocument = async () => {
        try {
            setIsLoading(true);
            storage.setItem('tableDocument', {});
            await api.sendTableDocument().then(() => { });
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const tableDocument = storage.getItem('tableDocument');

    return (
        <Layout>
            {tableDocument ?
                <SuccessfulMessage
                    title={'Documents are formed'}
                    message={'Documents for signing will be sent to your email'}
                />
                : <TablePayment onTableUpdate={setTable} table={table} onSubmitTableDocument={onSubmitTableDocument} />}
        </Layout>
    );
};

export { LoanDocument };