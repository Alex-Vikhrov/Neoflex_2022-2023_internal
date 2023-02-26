import { api } from 'api/api';
import { Layout, PinCodeInput, SuccessfulMessage } from 'components';
import { useFormik } from 'formik';
import { FC, KeyboardEvent, useEffect, } from 'react';
import box from 'img/svg/SurpriseImage.svg';
import { Link } from 'react-router-dom';
import './loanCode.scss';

const initialValues = {
    digit_0: '',
    digit_1: '',
    digit_2: '',
    digit_3: '',
};

const LoanCode: FC = () => {
    const { values, touched, errors, submitForm, handleBlur, handleChange, } = useFormik({
        initialValues,
        // validationSchema: basicSchema,
        onSubmit: async (values) => {
            const pin = `${values.digit_0}${values.digit_1}${values.digit_2}${values.digit_3}`;
            localStorage.setItem('pinCode', JSON.stringify(pin));
            return await api.sendPinCode(pin);
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
            // errors: errors.passportNumber,
            // touched: touched.passportNumber,
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
            // errors: errors.passportNumber,
            // touched: touched.passportNumber,
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
            // errors: errors.passportNumber,
            // touched: touched.passportNumber,
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
            // errors: errors.passportNumber,
            // touched: touched.passportNumber,
            label: 'Your passport number',
            htmlFor: 'digit_3',
        },
    ];

    // const digits = [
    //     {
    //         id: 'digit_0',
    //         name: 'digit_0',
    //         value: values.digit_0,
    //         maxLength: 1,
    //         onChange: handleChange,
    //         onBlur: handleBlur,
    //     },
    //     {
    //         id: 'digit_1',
    //         name: 'digit_1',
    //         value: values.digit_1,
    //         maxLength: 1,
    //         onChange: handleChange,
    //         onBlur: handleBlur,
    //     },
    //     {
    //         id: 'digit_2',
    //         name: 'digit_2',
    //         value: values.digit_2,
    //         maxLength: 1,
    //         onChange: handleChange,
    //         onBlur: handleBlur,
    //     },
    //     {
    //         id: 'digit_3',
    //         name: 'digit_3',
    //         value: values.digit_3,
    //         maxLength: 1,
    //         onChange: handleChange,
    //         onBlur: handleBlur,
    //     },
    // ];

    useEffect(() => {
        if (values.digit_0 && values.digit_1 && values.digit_2 && values.digit_3) {
            submitForm();
        }
    }, [values]);

    const pinCode = localStorage.getItem('pinCode');

    return (
        <Layout>
            {
                pinCode ?
                    <SuccessfulMessage
                        title={'Congratulations! You have completed your new credit card.'}
                        message={'Your credit card will arrive soon. Thank you for choosing us!'}
                        button={
                            <Link
                                className="successful__btn"
                                to='/'
                                onClick={() => {
                                    localStorage.clear();
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
                                    <PinCodeInput
                                        key={index}
                                        id={pin.id}
                                        onChange={pin.onChange}
                                        onBlur={pin.onBlur}
                                        value={pin.value}
                                        maxLength={pin.maxLength}
                                    />
                                )
                            })}
                        </form>
                    </div>
            }
        </Layout>
    );
};

export { LoanCode };