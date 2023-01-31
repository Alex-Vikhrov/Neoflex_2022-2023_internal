import { ReactNode } from "react";

export interface ICard {
    urlToImage: string;
    title: string;
    url: string;
    description: string;
};

export interface ITab {
    id: number;
    label: string;
    component: ReactNode;
}
