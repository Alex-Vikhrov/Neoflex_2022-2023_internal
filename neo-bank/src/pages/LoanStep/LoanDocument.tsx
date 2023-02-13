import { api } from 'api/api';
import { Footer, Header, SuccessfulMessage, TablePayment } from 'components';
import { useAppDispatch } from 'hooks/redux';
import { FC, useEffect, useState } from 'react';
// import { sendTableDocument } from 'store/reducers/creditCardSlice';

const LoanDocument: FC = () => {
    const [table, setTable] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();


    const fetchTable = async () => {
        const response = await api.fetchTableDocument().then(function (response: any) {
            console.log(response);
            
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
            localStorage.setItem('tableDocument', JSON.stringify({}));
            await api.sendTableDocument().then(() => { });
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const tableDocument = localStorage.getItem('tableDocument');

    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    {tableDocument ?
                        <SuccessfulMessage
                            title={'Documents are formed'}
                            message={'Documents for signing will be sent to your email'}
                        />
                        : <TablePayment onTableUpdate={setTable} table={table} onSubmitTableDocument={onSubmitTableDocument} />}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { LoanDocument };