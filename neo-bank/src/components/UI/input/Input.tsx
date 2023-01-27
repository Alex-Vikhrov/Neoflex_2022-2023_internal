import React, { CSSProperties, FC } from 'react';
import './input.scss';


type TInputProps = {
    id: string;
    className?: string;
    type?: string | undefined;
    checked?: boolean;
    value: string | number | undefined;
    placeholder: string;
    onChange: any;
    required?: boolean;
    onBlur: any;
    min?: number;
    max?: number;
    style?: CSSProperties;
    step?: number;
    defaultValue?: number | string;
}

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
    defaultValue
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
            defaultValue={defaultValue}
        />
    );
}

export { Input };