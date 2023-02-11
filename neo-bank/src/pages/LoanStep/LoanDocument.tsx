import { api } from 'api/api';
import { Footer, Header, SuccessfulMessage, TablePayment } from 'components';
import { FC, useEffect, useState } from 'react';

const LoanDocument: FC = () => {
    const [table, setTable] = useState([]);

    const fetchTable = async () => {
        const response = await api.fetchTableDocument().then(function (response: any) {
            return response.credit;
        });

        setTable(response);
    };

    console.log(table);
    

    useEffect(() => {
        fetchTable()
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    <TablePayment table={table} />
                    <SuccessfulMessage
                        title={'Documents are formed'}
                        message={'Documents for signing will be sent to your email'}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { LoanDocument };