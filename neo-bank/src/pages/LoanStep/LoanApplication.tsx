import { Footer, FormApplication, Header, SuccessfulMessage } from 'components';
import { useAppDispatch } from 'hooks/redux';
import { FC, useState } from 'react';
import { fetchFormApplication } from 'store/reducers/creditCardSlice';

const LoanApplication: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();

    const onSubmitFormApplication = async (values: any) => {
        try {
            setIsLoading(true);
            await dispatch(fetchFormApplication(values));
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    <FormApplication onSubmitFormApplication={onSubmitFormApplication} />

                    <SuccessfulMessage
                        title={'Wait for a decision on the application'}
                        message={'The answer will come to your mail within 10 minutes'}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { LoanApplication };