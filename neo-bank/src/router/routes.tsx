import { ReactNode } from "react";
import { Home, Loan, LoanApplication, LoanCode, LoanDocument, LoanDocumentSign, NotFound } from "../pages";

export enum RouteNames {
    HOME = '/',
    LOAN = '/loan',
    NOT = '*',
};

type TRoutes = {
    path: string,
    component: ReactNode,
    exact: boolean
};

const applicationId = localStorage.getItem('applicationId');

export const routes: Array<TRoutes> = [
    { path: RouteNames.HOME, component: <Home />, exact: true },
    { path: RouteNames.LOAN, component: <Loan />, exact: true },
    { path: RouteNames.LOAN + `/${applicationId}`, component: <LoanApplication />, exact: true },
    { path: RouteNames.LOAN + `/${applicationId}/document`, component: <LoanDocument />, exact: true },
    { path: RouteNames.LOAN + `/${applicationId}/document/sign`, component: <LoanDocumentSign />, exact: true },
    { path: RouteNames.LOAN + `/${applicationId}/code`, component: <LoanCode />, exact: true },
    { path: RouteNames.NOT, component: <NotFound />, exact: true },
];