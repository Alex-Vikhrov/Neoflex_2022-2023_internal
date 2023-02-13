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

export const fetchFormLoan = createAsyncThunk(
    'loan/fetchFormLoan',
    async (values: any, thunkAPI) => {
        const response = await api.sendFormLoan(values);
        localStorage.setItem('offers', JSON.stringify(response.data));
        return response.data;
    }
);

export const fetchOffers = createAsyncThunk(
    'loan/fetchOffers',
    async (values: any, thunkAPI) => {
        await api.sendOffers(values);
        localStorage.setItem('applicationId', JSON.stringify(values.applicationId));
        return values.applicationId;
    }
);

export const fetchFormApplication = createAsyncThunk(
    'loan/fetchFormApplication',
    async (values: any, thunkAPI) => {
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