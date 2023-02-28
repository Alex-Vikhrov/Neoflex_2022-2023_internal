import * as Yup from 'yup';

const pinSchema = Yup.object().shape({
    digit_0: Yup.string().required('Please enter the first digit'),
    digit_1: Yup.string().required('Please enter the second digit'),
    digit_2: Yup.string().required('Please enter the third digit'),
    digit_3: Yup.string().required('Please enter the fourth digit'),
});

export { pinSchema };