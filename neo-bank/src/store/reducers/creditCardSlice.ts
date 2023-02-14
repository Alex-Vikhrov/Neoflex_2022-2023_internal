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

type TOffersValue = {
    requestedAmount: number,
    totalAmount: number,
    term: number,
    monthlyPayment: number,
    rate: number,
    isInsuranceEnabled: boolean,
    isSalaryClient: boolean,
    applicationId: number,
};

type TFormLoan = {
    amount: number;
    term: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    birthdate: string;
    passportSeries: string;
    passportNumber: string;
}

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

export const fetchFormLoan = createAsyncThunk(
    'loan/fetchFormLoan',
    async (values: TFormLoan) => {
        const response = await api.sendFormLoan(values);
        console.log(values);
        localStorage.setItem('offers', JSON.stringify(response.data));
        return response.data;
    }
);

export const fetchOffers = createAsyncThunk(
    'loan/fetchOffers',
    async (values: TOffersValue) => {
        console.log(values);
        await api.sendOffers(values);
        localStorage.setItem('applicationId', JSON.stringify(values.applicationId));
        return values.applicationId;
    }
);

export const fetchFormApplication = createAsyncThunk(
    'loan/fetchFormApplication',
    async (values: any) => {
        await api.sendFormApplication(values);
        localStorage.setItem('endRegistration', JSON.stringify(values));
        return values;
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