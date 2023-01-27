import { ReactNode } from "react";
import { Home, Loan, NotFound } from "../pages";

type TRoutes = {
    path: string,
    component: ReactNode,
    exact: boolean
};

export const routes: Array<TRoutes> = [
    { path: '/', component: <Home />, exact: true },
    { path: '/loan', component: <Loan />, exact: true },
    { path: '/404', component: <NotFound />, exact: true },
];