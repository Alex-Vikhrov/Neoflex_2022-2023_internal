import { FC } from 'react';
import './select.scss';

type TSelectProps = {
    className: string;
    htmlFor: string;
    name: string;
    onChange: any;
    options: Array<any>;
}

const Select: FC<TSelectProps> = ({ className, htmlFor, name, onChange, options, }) => {
    console.log(options);

    return (
        <select
            className={className || 'defaultSelect'}
            id={htmlFor}
            name={name}
            onChange={onChange}
        >
            {
                options.map((option, index) => {
                    return (
                        <option
                            key={option.value + index}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    );
                })
            }
        </select>
    );
};

export { Select };