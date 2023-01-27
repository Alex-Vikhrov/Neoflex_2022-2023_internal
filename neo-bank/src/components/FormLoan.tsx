import { FC, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { basicShema } from 'utils/basicValidate';
import star from 'img/star.svg';
import { Button, Input, Label, Loader, Select } from './UI';

type TFormLoanProps = {
    handleSub: () => void;
};

const FormLoan: FC<TFormLoanProps> = ({ handleSub }) => {
    const { values, touched, errors, isValid, handleBlur, handleChange, handleSubmit, validateOnChange, validateOnBlur } = useFormik({
        initialValues: {
            lastName: '',
            firstName: '',
            passportSeries: '',
            passportNumber: '',
            email: '',
            birthday: '',
        },
        validationSchema: basicShema,
        // validateOnChange: false,
        // validateOnBlur: false, 
        onSubmit: (values) => {

        },
    });

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
            placeholder: 'For Example Victorovich',
        },
        {
            type: 'select',
            label: 'Select term',
            htmlFor: 'term',
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
                }
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
        },
        {
            id: 'passportSeries',
            type: 'number',
            placeholder: '0000',
            value: values.passportSeries,
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
            type: 'number',
            placeholder: '000000',
            value: values.passportNumber,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.passportNumber,
            touched: touched.passportNumber,
            label: 'Your passport number',
            htmlFor: 'passportNumber',
            img: star,
        },
    ];

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (errors === null) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className="form">
            <h3>Contact Information</h3>
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
                                        onChange={undefined}
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
                                    />}
                                {item.errors && item.touched && <span className='erros-icon'></span>}
                                {!item.errors && item.touched ? <span className='ok-icon'></span> : ''}
                            </Label>
                            {item.errors && item.touched && <p className='erros'>{item.errors}</p>}
                        </div>
                    );
                })}
            </div>

            <div className="form__button-container">
                <Button
                    className={"form__button"}
                    type="submit"
                    disabled={formValid}
                >
                    Continue
                </Button>
            </div>
        </form>
    );
};

export { FormLoan };