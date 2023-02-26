import { FC } from 'react';
import './range.scss';

type TRange = {
    title: string,
    min: string,
    max: string,
    id: string,
    value: any,
    onBlur: any,
    onChange: any,
}

const Range: FC<TRange> = ({ title, min, max, id, value, onBlur, onChange }) => {
    return (
        <>
            <h3>{title}</h3>
            <input
                id={id}
                type={'text'}
                className={'amountSum'}
                value={!value ? 15000 : value}
                placeholder={""}
                onBlur={onBlur}
                onChange={onChange}
            />
            <input
                id={id}
                className={'amountRange'}
                type={'range'}
                min={15000}
                max={600000}
                step={1000}
                value={!value ? 15000 : value}
                placeholder={""}
                onBlur={onBlur}
                onChange={onChange}
            />
            <div className="amount__min-max">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </>
    )
};

export { Range };