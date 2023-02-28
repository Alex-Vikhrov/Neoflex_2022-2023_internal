import { FC } from 'react';
import { Button, FormWrapper } from '../../UI';
import { AmountSelect } from 'components';
import { useFormLoan } from './initialValuesFormLoan';

type TFormLoanProps = {
    handleLoad?: () => void;
    onSubmitFormLoan: any;
    isLoading?: boolean;
};

const FormLoan: FC<TFormLoanProps> = ({ isLoading, onSubmitFormLoan }) => {
    const { handleSubmit, amountForm, formContact } = useFormLoan({
        onSubmitFormLoan
    });

    return (
        <form onSubmit={handleSubmit} className={isLoading ? "form load" : "form"}>
            <AmountSelect {...amountForm} />
            <h3 className='form__h3'>Contact Information</h3>
            <FormWrapper initialValue={formContact} className={'form__wrapper'} />
            <div className="form__button-container">
                <Button
                    className={"form__button"}
                    type="submit"
                >
                    Continue
                </Button>
            </div>
        </form>
    );
};

export { FormLoan };