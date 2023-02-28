import { FormApplication, Layout, SuccessfulMessage } from 'components';
import { useAppDispatch } from 'hooks/useRedux';
import { FC, useState } from 'react';
import { fetchFormApplication } from 'store/reducers/creditCardSlice';
import { storage } from 'utils';

type TValue = {
    gender: string;
    maritalStatus: string;
    dependentAmount: number;
    passportIssueDate: string;
    passportIssueBranch: string;
    employmentStatus: string;
    employerINN: string;
    salary: number;
    position: string;
    workExperienceTotal: number;
    workExperienceCurrent: number;
    account: string;
};

const LoanApplication: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();

    const onSubmitFormApplication = async (values: TValue) => {
        const data = {
            gender: values.gender,
            maritalStatus: values.maritalStatus,
            dependentAmount: values.dependentAmount,
            passportIssueDate: values.passportIssueDate,
            passportIssueBranch: values.passportIssueBranch,
            employment: {
                employmentStatus: values.employmentStatus,
                employerINN: values.employerINN,
                salary: values.salary,
                position: values.position,
                workExperienceTotal: values.workExperienceTotal,
                workExperienceCurrent: values.workExperienceCurrent
            },
            account: "11223344556677890000"
        };
        try {
            setIsLoading(true);
            await dispatch(fetchFormApplication(data));
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const endRegistration = storage.getItem('endRegistration');

    return (
        <Layout>
            {endRegistration ? <SuccessfulMessage
                title={'Wait for a decision on the application'}
                message={'The answer will come to your mail within 10 minutes'}
            /> : <FormApplication isLoading={isLoading} onSubmitFormApplication={onSubmitFormApplication} />}
        </Layout>
    );
};

export { LoanApplication };