import { api } from 'api/api';
import { Layout, PinCodeInput, SuccessfulMessage } from 'components';
import { useFormik } from 'formik';
import { FC, useEffect, useState, } from 'react';
import box from 'img/svg/SurpriseImage.svg';
import { Link } from 'react-router-dom';
import './loanCode.scss';
import { storage } from 'utils';
import { pinSchema } from 'utils/validate/pinCodeValidate';

const initialValues = {
    digit_0: '',
    digit_1: '',
    digit_2: '',
    digit_3: '',
};

const LoanCode: FC = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(true);
    const { values, touched, errors, submitForm, handleBlur, handleChange, } = useFormik({
        initialValues,
        validationSchema: pinSchema,
        onSubmit: async (values) => {
            const pin = `${values.digit_0}${values.digit_1}${values.digit_2}${values.digit_3}`;
            storage.setItem('pinCode', pin);
            try {
                const response = await api.sendPinCode(pin);
                if (response.status === 200) {
                    setIsSuccess(true);
                    setIsError(true);
                } else {
                    setIsError(false);
                }
            } catch (error) {
                setIsError(false);
            }
        },
    });

    const digits = [
        {
            id: 'digit_0',
            type: 'text',
            placeholder: '0',
            value: values.digit_0,
            maxLength: 1,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.digit_0,
            touched: touched.digit_0,
            label: 'Your passport number',
            htmlFor: 'digit_0',
        },
        {
            id: 'digit_1',
            type: 'text',
            placeholder: '0',
            value: values.digit_1,
            maxLength: 1,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.digit_1,
            touched: touched.digit_1,
            label: 'Your passport number',
            htmlFor: 'digit_1',
        },
        {
            id: 'digit_2',
            type: 'text',
            placeholder: '0',
            value: values.digit_2,
            maxLength: 1,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.digit_2,
            touched: touched.digit_2,
            label: 'Your passport number',
            htmlFor: 'digit_2',
        },
        {
            id: 'digit_3',
            type: 'text',
            placeholder: '0',
            value: values.digit_3,
            maxLength: 1,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.digit_3,
            touched: touched.digit_3,
            label: 'Your passport number',
            htmlFor: 'digit_3',
        },
    ];

    useEffect(() => {
        if (values.digit_0 && values.digit_1 && values.digit_2 && values.digit_3) {
            submitForm();
        }
    }, [values]);

    const pinCode = storage.getItem('pinCode');


    return (
        <Layout>
            {
                isSuccess && pinCode ?
                    <SuccessfulMessage
                        title={'Congratulations! You have completed your new credit card.'}
                        message={'Your credit card will arrive soon. Thank you for choosing us!'}
                        button={
                            <Link
                                className="successful__btn"
                                to='/'
                                onClick={() => {
                                    storage.clear();
                                }}
                            >
                                View other offers of our bank
                            </Link>
                        }
                        imaged={true}
                        src={box}
                        alt={'YYOOHHOO'}
                    />
                    : <div className="pin-wrapper">
                        <h2 className='title-pin'>Please enter confirmation code</h2>
                        <form className='form-pin'>
                            {digits.map((pin, index) => {
                                return (
                                    <>
                                        <PinCodeInput
                                            key={index}
                                            id={pin.id}
                                            onChange={pin.onChange}
                                            onBlur={pin.onBlur}
                                            value={pin.value}
                                            maxLength={pin.maxLength}
                                        />
                                    </>
                                );
                            })}
                        </form>
                        {isError ? null : <p className='errors-pin'>Invalid confirmation code</p>}
                    </div>
            }
        </Layout>
    );
};

export { LoanCode };