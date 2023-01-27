import * as yup from 'yup';

const clacDateBirthday = (birthday) => {
    const ageDifMs = Date.now() - birthday;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getFullYear() - 1970);
};

export const basicShema = yup.object().shape({
    lastName: yup.string()
        .matches(/\b[A-Z][a-zA-Z]*\b/, 'Use only letters, the first capital')
        .ensure()
        .min(2, 'The minimum number of letters is 2')
        .required('Enter your last name'),
    firstName: yup.string()
        .matches(/\b[A-Z][a-zA-Z]*\b/, 'Use only letters, the first capital')
        .ensure().min(2, 'The minimum number of letters is 2')
        .required('Enter your first name'),
    email: yup.string()
        .email('Incorrect email address')
        .required('Incorrect email address'),
    birthday: yup.date().test("birthday", "Incorrect date of birth", (value) => {
        return clacDateBirthday(new Date(value)) >= 18;
    }).required('Incorrect date of birth'),
    passportSeries: yup.string()
        .length(4, 'The series must be 4 digits')
        .ensure()
        .min(4, 'The series must be 4 digits'),
    passportNumber: yup.string()
        .length(6, 'The series must be 6 digits')
        .ensure()
        .min(6, 'The series must be 6 digits'),
});