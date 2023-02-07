import { Button, Input, Label, Select } from "components";
import { FC } from "react";
import star from 'img/star.svg';

import { CustomizeCard, CustomizeTitle } from "../CustomizeCard";
import './formApplication.scss';
import { basicSchema } from "utils/basicValidate";
import { useFormik } from "formik";

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

const FormApplication: FC = () => {
    const { values, touched, errors, handleBlur, handleChange, handleSubmit, } = useFormik({
        initialValues,
        validationSchema: basicSchema,
        onSubmit: (values, args) => {
            // handleLoad();
        },
    });

    const formContact = [
        {
            type: 'gender',
            label: `What's your gender`,
            htmlFor: 'gender',
            onChange: handleChange,
            onBlur: handleBlur,
            img: star,
            id: 'gender',
            placeholder: '',
            selected: true,
            options: [
                {
                    id: 1,
                    text: 'MALE',
                },
                {
                    id: 2,
                    text: 'FAMALE',
                },
            ],
        },
        {
            type: 'maritalStatus',
            label: `Your marital status`,
            htmlFor: 'maritalStatus',
            onChange: handleChange,
            onBlur: handleBlur,
            img: star,
            id: 'maritalStatus',
            placeholder: '',
            selected: true,
            options: [
                {
                    id: 1,
                    text: 'MARRIED',
                },
                {
                    id: 2,
                    text: 'DIVORCED',
                },
                {
                    id: 3,
                    text: 'SINGLE',
                },
                {
                    id: 4,
                    text: 'WIDOW_WIDOWER',
                },
            ],
        },
        {
            type: 'dependentAmount',
            label: `Your number of dependents`,
            htmlFor: 'dependentAmount',
            onChange: handleChange,
            onBlur: handleBlur,
            img: star,
            id: 'dependentAmount',
            placeholder: '',
            selected: true,
            options: [
                {
                    id: 1,
                    text: 'MARRIED',
                },
            ],
        },
        {
            id: 'passportIssueDate',
            type: 'text',
            placeholder: 'Select Date and Time',
            value: values.lastName,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.lastName,
            touched: touched.lastName,
            label: 'Date of issue of the passport',
            htmlFor: 'passportIssueDate',
            img: star,
        },
        {
            id: 'passportIssueBranch',
            type: 'number',
            placeholder: '000000',
            value: values.firstName,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.firstName,
            touched: touched.firstName,
            label: 'Division code',
            htmlFor: 'passportIssueBranch',
            img: star,
        },
    ];

    const employment = [
        {
            type: 'employmentStatus',
            label: `Your employment status`,
            htmlFor: 'employmentStatus',
            onChange: handleChange,
            onBlur: handleBlur,
            img: star,
            id: 'employmentStatus',
            placeholder: '',
            selected: true,
            options: [
                {
                    id: 1,
                    text: 'UNEMPLOYED',
                },
                {
                    id: 2,
                    text: 'SELF_EMPLOYED',
                },
                {
                    id: 3,
                    text: 'EMPLOYED',
                },
                {
                    id: 4,
                    text: 'BUSINESS_OWNER',
                },
            ],
        },
        {
            type: 'text',
            label: `Your employer INN`,
            htmlFor: 'employerINN',
            onChange: handleChange,
            onBlur: handleBlur,
            img: star,
            id: 'employerINN',
            placeholder: '',
        },
        {
            type: 'text',
            label: `Your salary`,
            htmlFor: 'salary',
            onChange: handleChange,
            onBlur: handleBlur,
            img: star,
            id: 'salary',
            placeholder: '',
        },
        {
            id: 'position',
            type: 'text',
            placeholder: 'Select Date and Time',
            value: values.lastName,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.lastName,
            touched: touched.lastName,
            label: 'Your position',
            htmlFor: 'position',
            img: star,
            selected: true,
            options: [
                {
                    id: 1,
                    text: 'WORKER',
                },
                {
                    id: 2,
                    text: 'MID_MANAGER',
                },
                {
                    id: 3,
                    text: 'TOP_MANAGER',
                },
                {
                    id: 4,
                    text: 'OWNER',
                },
            ],
        },
        {
            id: 'workExperienceTotal',
            type: 'number',
            placeholder: 'For example 10',
            value: values.firstName,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.firstName,
            touched: touched.firstName,
            label: 'Your work experience total',
            htmlFor: 'workExperienceTotal',
            img: star,
        },
        {
            id: 'workExperienceCurrent',
            type: 'number',
            placeholder: 'For example 2',
            value: values.firstName,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.firstName,
            touched: touched.firstName,
            label: 'Your work experience current',
            htmlFor: 'workExperienceCurrent',
            img: star,
        },
    ];

    return (
        <CustomizeCard>
            <form action="" className="form-application">
                <CustomizeTitle title={"Continuation of the application"} step={2} />
                <div className="form-application__wrapper">
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
                                        // maxLength={item.maxLength}
                                        // min={item.min}
                                        // max={item.max}
                                        />
                                    }
                                </Label>
                            </div>
                        )
                    })}
                </div>
                <h3>Employment</h3>
                <div className="form-application__wrapper">
                    {employment.map((item) => {
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
                                        // maxLength={item.maxLength}
                                        // min={item.min}
                                        // max={item.max}
                                        />
                                    }
                                </Label>
                            </div>
                        )
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
        </CustomizeCard>
    );
};

export { FormApplication };