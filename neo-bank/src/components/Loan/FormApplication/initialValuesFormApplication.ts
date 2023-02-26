import star from 'img/svg/star.svg';

export const formContact: any = (
    values: {
        dependentAmount: any;
        passportIssueDate: any;
        passportIssueBranch: any;
    },
    handleChange: () => any,
    handleBlur: () => any,
    errors: {
        passportIssueDate: any;
        passportIssueBranch: any;
    },
    touched: {
        passportIssueDate: any;
        passportIssueBranch: any;
    }) => [
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
                    id: 0,
                    text: '',
                },
                {
                    id: 1,
                    text: 'MALE',
                    value: 'MALE',
                },
                {
                    id: 2,
                    text: 'FAMALE',
                    value: 'FAMALE',
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
                    value: 'MARRIED',
                },
                {
                    id: 2,
                    text: 'DIVORCED',
                    value: 'DIVORCED',
                },
                {
                    id: 3,
                    text: 'SINGLE',
                    value: 'SINGLE',
                },
                {
                    id: 4,
                    text: 'WIDOW_WIDOWER',
                    value: 'WIDOW_WIDOWER',
                },
            ],
        },
        {
            type: 'number',
            label: `Your number of dependents`,
            htmlFor: 'dependentAmount',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.dependentAmount,
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
            maxLength: 6,
            label: 'Division code',
            htmlFor: 'passportIssueBranch',
            img: star,
        },
    ];


export const employment: any = (
    values: {
        employerINN: any;
        salary: any;
        position: any;
        workExperienceTotal: any;
        workExperienceCurrent: any

    },
    handleChange: any,
    handleBlur: any,
    errors: {
        employerINN: any;
        salary: any;
        position: any;
        workExperienceTotal: any;
        workExperienceCurrent: any


    },
    touched: {
        employerINN: any;
        salary: any;
        position: any;
        workExperienceTotal: any;
        workExperienceCurrent: any
    }) => [
        {
            id: 'employmentStatus',
            type: 'employmentStatus',
            onChange: () => handleChange(),
            onBlur: () => handleBlur(),
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
                    value: 'UNEMPLOYED',
                },
                {
                    id: 2,
                    text: 'SELF_EMPLOYED',
                    value: 'SELF_EMPLOYED',
                },
                {
                    id: 3,
                    text: 'EMPLOYED',
                    value: 'EMPLOYED',
                },
                {
                    id: 4,
                    text: 'BUSINESS_OWNER',
                    value: 'BUSINESS_OWNER',
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
                    value: 'WORKER',
                },
                {
                    id: 2,
                    text: 'MID_MANAGER',
                    value: 'MID_MANAGER',
                },
                {
                    id: 3,
                    text: 'TOP_MANAGER',
                    value: 'TOP_MANAGER',
                },
                {
                    id: 4,
                    text: 'OWNER',
                    value: 'OWNER',
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