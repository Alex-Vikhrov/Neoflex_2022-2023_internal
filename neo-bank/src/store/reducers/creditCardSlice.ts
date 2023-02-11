import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { IOffersCards } from 'types/IOffersCards';

interface CreditOffersCards {
    offers: Array<IOffersCards>;
    isLoading: boolean;
    error: string;
    step: number;
    applicationId: number,

};

const getOffersFromStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('offers') || '');
    } catch {
        return [];
    }
};

const getOffersCardFromStorage = () => {
    const offersCard: number = +JSON.parse(localStorage.getItem('applicationId') || '0');
    if (offersCard) {
        return offersCard;
    } return 0;
}

const initialState: CreditOffersCards = {
    offers: getOffersFromStorage(),
    isLoading: false,
    error: '',
    step: 1,
    applicationId: getOffersCardFromStorage(),
};

export const fetchFormLoan = createAsyncThunk<any, any, any>(
    'loan/fetchFormLoan',
    async (values: any, thunkAPI) => {
        const response = await api.sendFormLoan(values);
        localStorage.setItem('offers', JSON.stringify(response.data));
        return response.data;
    }
);

export const fetchOffers = createAsyncThunk<any, any, any>(
    'loan/fetchOffers',
    async (values: any, thunkAPI) => {
        await api.sendOffers(values);
        localStorage.setItem('applicationId', JSON.stringify(values.applicationId));
        return values.applicationId;
    }
);

export const fetchFormApplication = createAsyncThunk<any, any, any>(
    'loan/fetchFormApplication',
    async (values: any, thunkAPI) => {
        const data = {
            gender: values.gender,
            maritalStatus: values.maritalStatus,
            dependentAmount: values.dependentAmount,
            passportIssueDate: values.passportIssueDate,
            passportIssueBranch: values.passportIssueBranch,
            employment: {
                employmentStatus: values.employmentStatus,
                employerINN: values.employerINN,
                salary: values.salary,
                position: values.position,
                workExperienceTotal: values.workExperienceTotal,
                workExperienceCurrent: values.workExperienceCurrent
            },
            account: values.account
        };
        console.log(data);
        await api.sendFormApplication(data);
        localStorage.setItem('endRegistration', JSON.stringify(data));
        console.log(data);
        return data;
    }
);

const creditOffersCardSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.step += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFormLoan.fulfilled, (state, action) => {
            state.offers = [...action.payload];
        });
        builder.addCase(fetchOffers.fulfilled, (state, action) => {
            state.applicationId = action.payload;
        });
    },
});

export { creditOffersCardSlice };
export default creditOffersCardSlice.reducer;