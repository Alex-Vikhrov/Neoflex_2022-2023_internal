import { FC } from 'react';
import './loader.scss';

type TLoaderProps = {
    className?: string;
};

const Loader: FC<TLoaderProps> = ({ className }) => {
    return (
        <div className={className || "lds-default"}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export { Loader };