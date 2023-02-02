import { ChangeEventHandler, FC } from 'react';
import { IOptions } from 'types';
import './select.scss';

type TSelectProps = {
    className: string;
    htmlFor: string;
    name: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    options: Array<IOptions>;
}

// interface TSelectProps2 extends Select

const Select: FC<TSelectProps> = ({ className, htmlFor, name, onChange, options, }) => {
    return (
        <select
            className={className || 'defaultSelect'}
            id={htmlFor}
            name={name}
            onChange={onChange}
        >
            {
                options.map((option) => {
                    return (
                        <option
                            key={option.id}
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