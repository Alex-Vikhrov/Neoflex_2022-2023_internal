import star from 'img/svg/star.svg';
import { useFormik } from "formik";
import { formLoanValidate } from 'utils';

interface IFormLoanParams {
    onSubmitFormLoan: Function;
};

const initialValues = {
    amount: 150000,
    term: '',
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    birthdate: '',
    passportSeries: '',
    passportNumber: '',
};

export const useFormLoan = ({ onSubmitFormLoan }: IFormLoanParams) => {
    const { values, touched, errors, handleBlur, handleChange, handleSubmit, } = useFormik({
        initialValues,
        validationSchema: formLoanValidate,
        onSubmit: (values) => onSubmitFormLoan(values),
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
            htmlFor: 'middleName',
            img: null,
            id: 'middleName',
            value: values.middleName,
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
            value: values.term,
            placeholder: '6 month',
            selected: true,
            options: [
                {
                    id: 1,
                    text: '6 month',
                    value: +'6',
                },
                {
                    id: 2,
                    text: '12 month',
                    value: +'12',

                },
                {
                    id: 3,
                    text: '18 month',
                    value: +'18',
                },
                {
                    id: 4,
                    text: '24 month',
                    value: +'24',
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
            id: 'birthdate',
            type: 'date',
            value: values.birthdate,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.birthdate,
            touched: touched.birthdate,
            label: 'Your date of birthday',
            htmlFor: 'birthdate',
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
    return { handleSubmit, amountForm, formContact };
};