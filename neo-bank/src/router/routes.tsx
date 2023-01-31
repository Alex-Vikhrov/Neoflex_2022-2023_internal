import { ReactNode } from "react";
import { Home, Loan, NotFound } from "../pages";

enum RouteNames {
    HOME = '/',
    LOAN = '/loan',
    NOT = '/404'
}

type TRoutes = {
    path: string,
    component: ReactNode,
    exact: boolean
};

export const routes: Array<TRoutes> = [
    { path: RouteNames.HOME, component: <Home />, exact: true },
    { path: RouteNames.LOAN, component: <Loan />, exact: true },
    { path: RouteNames.NOT, component: <NotFound />, exact: true },
];