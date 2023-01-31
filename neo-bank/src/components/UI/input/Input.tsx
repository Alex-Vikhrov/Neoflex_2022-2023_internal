import { FC, InputHTMLAttributes } from 'react';
import './input.scss';


interface TInputProps extends InputHTMLAttributes<HTMLInputElement> { };

const Input: FC<TInputProps> = ({
    ...props
}) => {
    return (
        <input
            {...props}
        />
    );
}

export { Input };