import * as yup from 'yup';

export const formApplicationSchema = yup.object().shape({
    gender: yup.string().ensure().required('Select one of the options'),
    maritalStatus: yup.string().ensure().required('Select one of the options'),
    dependentAmount: yup.string().ensure().required('Select one of the options'),
    passportIssueDate: yup.string().ensure().required('Incorrect date of passport issue date'),
    passportIssueBranch: yup.string()
        .length(7, 'The series must be 7 digits')
        .ensure()
        .min(7, 'The series must be 7 digits'),
    employmentStatus: yup.string().ensure().required('Select one of the options'),
    employerINN: yup.string()
        .length(12, 'Department code must be 12 digits')
        .ensure().required('Department code must be 12 digits')
        .min(12, 'Department code must be 12 digits'),
    salary: yup.string().ensure().required('Enter your salary'),
    position: yup.string().ensure().required('Select one of the options'),
    workExperienceTotal: yup.string()
        .ensure().required('Enter your work experience current')
        .min(1, 'The series must be 2 digits'),
    workExperienceCurrent: yup.string()
        .ensure().required('Enter your work experience total')
        .min(1).max(2),
});