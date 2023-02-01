import { FC } from 'react';
import './loader.scss';

type TLoaderProps = {
    className?: string;
};

const Loader: FC<TLoaderProps> = ({ className }) => {
    return (
        <div className={className || "loader"}></div>
    );
};

export { Loader };