import { FC } from 'react';
import { useFormik } from 'formik';
import { basicSchema } from 'utils/basicValidate';
import star from 'img/star.svg';
import { Button, Input, Label, Select } from '../../UI';
import { AmountSelect } from 'components';

type TFormLoanProps = {
    handleLoad: () => void;
};

const initialValues = {
    lastName: '',
    firstName: '',
    patronymic: '',
    passportSeries: '',
    passportNumber: '',
    email: '',
    birthday: '',
    amount: '150000'
};

const FormLoan: FC<TFormLoanProps> = ({ handleLoad }) => {
    const { values, touched, errors, handleBlur, handleChange, handleSubmit, } = useFormik({
        initialValues,
        validationSchema: basicSchema,
        onSubmit: (values, args) => {
            handleLoad();
        },
    });

    const amountForm = {
        id: 'amount',
        type: 'number',
        placeholder: 'For Example Doe',
        value: values.amount,
        onChange: handleChange,
        onBlur: handleBlur,
    };

    const formContact = [
        {
            id: 'lastName',
            type: 'text',
            placeholder: 'For Example Doe',
            value: values.lastName,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.lastName,
            touched: touched.lastName,
            label: 'Your last name',
            htmlFor: 'lastName',
            img: star,
        },
        {
            id: 'firstName',
            type: 'text',
            placeholder: 'For Example Jhon',
            value: values.firstName,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.firstName,
            touched: touched.firstName,
            label: 'Your first name',
            htmlFor: 'firstName',
            img: star,
        },
        {
            label: 'Your patronymic',
            htmlFor: 'patronymic',
            img: null,
            id: 'patronymic',
            value: values.patronymic,
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: 'For Example Victorovich',
        },
        {
            type: 'select',
            label: 'Select term',
            htmlFor: 'term',
            onChange: handleChange,
            onBlur: handleBlur,
            img: star,
            id: 'term',
            placeholder: '6 month',
            selected: true,
            options: [
                {
                    id: 1,
                    text: '6 month',
                },
                {
                    id: 2,
                    text: '12 month',
                },
                {
                    id: 3,
                    text: '18 month',
                },
                {
                    id: 4,
                    text: '24 month'
                },
            ],
        },
        {
            id: 'email',
            value: values.email,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.email,
            touched: touched.email,
            type: 'email',
            label: 'Your email',
            htmlFor: 'email',
            img: star,
            placeholder: 'test@gmail.com',
        },
        {
            id: 'birthday',
            type: 'date',
            value: values.birthday,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.birthday,
            touched: touched.birthday,
            label: 'Your date of birthday',
            htmlFor: 'birthday',
            img: star,
            placeholder: 'Select Date and Time',
            min: '1900-01-01',
            max: '2100-01-01'
        },
        {
            id: 'passportSeries',
            type: 'text',
            placeholder: '0000',
            value: isNaN(+values.passportSeries) ? '' : values.passportSeries,
            maxLength: 4,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.passportSeries,
            touched: touched.passportSeries,
            label: 'Your passport series',
            htmlFor: 'passportSeries',
            img: star,
        },
        {
            id: 'passportNumber',
            type: 'text',
            placeholder: '000000',
            value: isNaN(+values.passportNumber) ? '' : values.passportNumber,
            maxLength: 6,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.passportNumber,
            touched: touched.passportNumber,
            label: 'Your passport number',
            htmlFor: 'passportNumber',
            img: star,
        },
    ];

    return (
        <form onSubmit={handleSubmit} className="form">
            <AmountSelect {...amountForm} />
            <h3 className='form__h3'>Contact Information</h3>
            <div className="form__wrapper">
                {formContact.map((item) => {
                    return (
                        <div key={item.id}>
                            <Label htmlFor={item.htmlFor} className={""}>
                                {item.label} {item.img === null ? '' : <img className="star" src={item.img} alt="star" />}
                                {item.selected ?
                                    <Select
                                        className={''}
                                        htmlFor={item.htmlFor}
                                        name={item.id}
                                        onChange={item.onChange}
                                        options={item.options} />
                                    :
                                    <Input
                                        id={item.id}
                                        type={item.type}
                                        placeholder={item.placeholder}
                                        className={item.errors && item.touched ? 'defaultInput input-error' : 'defaultInput'}
                                        value={item.value}
                                        onChange={item.onChange}
                                        onBlur={item.onBlur}
                                        maxLength={item.maxLength}
                                        min={item.min}
                                        max={item.max}
                                    />}
                                {item.errors && item.touched && <span className='errors-icon'></span>}
                                {!item.errors && item.touched ? <span className='ok-icon'></span> : ''}
                            </Label>
                            {item.errors && item.touched && <p className='errors'>{item.errors}</p>}
                        </div>
                    );
                })}
            </div>

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