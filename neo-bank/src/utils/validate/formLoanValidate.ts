import * as yup from 'yup';

const calcDateBirthday = (birthdate: number | Date) => {
    const ageDifMs = Date.now() - +birthdate;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getFullYear() - 1970);
};

const formLoanValidate = yup.object().shape({
    lastName: yup.string()
        .matches(/\b[A-Za-z]+\b/, 'Use only letters')
        .ensure()
        .min(2, 'The minimum number of letters is 2')
        .required('Enter your last name'),
    firstName: yup.string()
        .matches(/\b[A-Za-z]+\b/, 'Use only letters')
        .ensure().min(2, 'The minimum number of letters is 2')
        .required('Enter your first name'),
    email: yup.string()
        .email('Incorrect email address')
        .required('Incorrect email address'),
    birthdate: yup.date().test("birthday", "Incorrect date of birth", (value?: Date) => {
        if (!value) return false;
        return calcDateBirthday(value) >= 18;
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

export { formLoanValidate };
