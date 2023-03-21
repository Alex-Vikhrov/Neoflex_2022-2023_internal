export interface ICurrencyParams {
    from: string;
    to: string;
};

export interface ICurrency {
    data: number;
};

export interface IBusinessNews {
    articles: any;
    data: any;
};

export interface IFormLoan {
    amount: number;
    term: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    birthdate: string;
    passportSeries: string;
    passportNumber: string;
};

export interface IOffers {
    requestedAmount: number;
    totalAmount: number;
    term: number;
    monthlyPayment: number;
    rate: number;
    isInsuranceEnabled: boolean;
    isSalaryClient: boolean;
    applicationId: number;
};

export interface IFormApplication {
    email: string;
    amount: number;
    loanTerm: number;
};

export interface ITableDocument {
    data: {
        documents: {
            name: string;
            status: string;
            url: string;
        }[];
    };
};