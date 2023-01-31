import { FC, InputHTMLAttributes } from 'react';
import './input.scss';


interface TInputProps extends InputHTMLAttributes<HTMLInputElement>{};

const Input: FC<TInputProps> = ({
    id,
    className,
    type,
    checked,
    value,
    placeholder,
    onChange,
    required,
    onBlur,
    style,
    min,
    max,
    step,
    maxLength,
    // defaultValue
}) => {
    return (
        <input
            id={id}
            className={className || 'defaultInput'}
            style={style}
            type={type || 'text'}
            checked={checked || false}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            required={required || false}
            min={min}
            max={max}
            step={step}
            // defaultValue={defaultValue}
            maxLength={maxLength}
        />
    );
}

export { Input };