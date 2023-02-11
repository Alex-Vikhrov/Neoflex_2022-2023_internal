import { Button, Input, Label, Select } from "components";
import { FC } from "react";
import star from 'img/star.svg';
import { CustomizeCard, CustomizeTitle } from "../CustomizeCard";
import './formApplication.scss';
import { useFormik } from "formik";
import { FieldFormApplication } from "./FieldFormApplication";
import { formApplicationSchema } from "utils/formApplicationValidate";

const initialValues = {
    gender: '',
    maritalStatus: '',
    dependentAmount: '',
    passportIssueDate: '',
    passportIssueBranch: '',
    employmentStatus: '',
    employerINN: '',
    salary: '',
    position: '',
    workExperienceTotal: '',
    workExperienceCurrent: '',
    account: '11223344556677889900',
};

const FormApplication: FC<{ onSubmitFormApplication: any }> = ({ onSubmitFormApplication }) => {
    const { values, touched, errors, handleBlur, handleChange, handleSubmit, } = useFormik({
        initialValues,
        validationSchema: formApplicationSchema,
        onSubmit: (values, args) => onSubmitFormApplication(values),
    });

    const formContact = [
        {
            type: 'gender',
            label: `What's your gender`,
            htmlFor: 'gender',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.gender,
            img: star,
            id: 'gender',
            placeholder: '',
            selected: true,
            options: [
                {
                    id: 0,
                    text: '',
                },
                {
                    id: 1,
                    text: 'MALE',
                    value: 'MALE'
                },
                {
                    id: 2,
                    text: 'FAMALE',
                    value: 'FAMALE'
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
                    id: 0,
                    text: '',
                },
                {
                    id: 1,
                    text: 'MARRIED',
                    value:'MARRIED'
                },
                {
                    id: 2,
                    text: 'DIVORCED',
                    value: 'DIVORCED'
                },
                {
                    id: 3,
                    text: 'SINGLE',
                    value:'SINGLE'
                },
                {
                    id: 4,
                    text: 'WIDOW_WIDOWER',
                    value: 'WIDOW_WIDOWER'
                },
            ],
        },
        {
            type: 'number',
            label: `Your number of dependents`,
            htmlFor: 'dependentAmount',
            onChange: handleChange,
            onBlur: handleBlur,
            img: star,
            id: 'dependentAmount',
            placeholder: '',
        },
        {
            id: 'passportIssueDate',
            type: 'date',
            placeholder: 'Select Date and Time',
            value: values.passportIssueDate,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.passportIssueDate,
            touched: touched.passportIssueDate,
            label: 'Date of issue of the passport',
            htmlFor: 'passportIssueDate',
            img: star,
        },
        {
            id: 'passportIssueBranch',
            type: 'text',
            placeholder: '000000',
            value: values.passportIssueBranch,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.passportIssueBranch,
            touched: touched.passportIssueBranch,
            maxLength: 7,
            label: 'Division code',
            htmlFor: 'passportIssueBranch',
            img: star,
        },
    ];

    const employment = [
        {
            id: 'employmentStatus',
            type: 'employmentStatus',
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: '',
            label: `Your employment status`,
            htmlFor: 'employmentStatus',
            img: star,
            selected: true,
            options: [
                {
                    id: 0,
                    text: '',
                },
                {
                    id: 1,
                    text: 'UNEMPLOYED',
                    value: 'UNEMPLOYED'
                },
                {
                    id: 2,
                    text: 'SELF_EMPLOYED',
                    value: 'SELF_EMPLOYED'
                },
                {
                    id: 3,
                    text: 'EMPLOYED',
                    value: 'EMPLOYED'
                },
                {
                    id: 4,
                    text: 'BUSINESS_OWNER',
                    value: 'BUSINESS_OWNER'
                },
            ],
        },
        {
            id: 'employerINN',
            type: 'text',
            placeholder: '',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.employerINN,
            errors: errors.employerINN,
            touched: touched.employerINN,
            maxLength: 12,
            label: `Your employer INN`,
            htmlFor: 'employerINN',
            img: star,
        },
        {
            id: 'salary',
            type: 'number',
            placeholder: '',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.salary,
            errors: errors.salary,
            touched: touched.salary,
            label: `Your salary`,
            htmlFor: 'salary',
            img: star,
        },
        {
            id: 'position',
            type: 'text',
            placeholder: 'Select Date and Time',
            value: values.position,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.position,
            touched: touched.position,
            label: 'Your position',
            htmlFor: 'position',
            img: star,
            selected: true,
            options: [
                {
                    id: 0,
                    text: '',
                },
                {
                    id: 1,
                    text: 'WORKER',
                    value:'WORKER'
                },
                {
                    id: 2,
                    text: 'MID_MANAGER',
                    value: 'MID_MANAGER'
                },
                {
                    id: 3,
                    text: 'TOP_MANAGER',
                    value: 'TOP_MANAGER'
                },
                {
                    id: 4,
                    text: 'OWNER',
                    value: 'OWNER'
                },
            ],
        },
        {
            id: 'workExperienceTotal',
            type: 'number',
            placeholder: 'For example 10',
            value: values.workExperienceTotal,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.workExperienceTotal,
            touched: touched.workExperienceTotal,
            maxLength: 2,
            label: 'Your work experience total',
            htmlFor: 'workExperienceTotal',
            img: star,
        },
        {
            id: 'workExperienceCurrent',
            type: 'number',
            placeholder: 'For example 2',
            value: values.workExperienceCurrent,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors.workExperienceCurrent,
            touched: touched.workExperienceCurrent,
            maxLength: 2,
            label: 'Your work experience current',
            htmlFor: 'workExperienceCurrent',
            img: star,
        },
    ];

    return (
        <CustomizeCard>
            <form className="form-application" onSubmit={handleSubmit}>
                <CustomizeTitle title={"Continuation of the application"} step={2} />
                <FieldFormApplication initialValue={formContact} />
                <h3>Employment</h3>
                <FieldFormApplication initialValue={employment} />
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