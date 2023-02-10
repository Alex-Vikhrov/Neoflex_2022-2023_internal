import { Footer, Header, SuccessfulMessage, TablePayment } from 'components';
import { FC } from 'react';

const LoanDocument: FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    <TablePayment />
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