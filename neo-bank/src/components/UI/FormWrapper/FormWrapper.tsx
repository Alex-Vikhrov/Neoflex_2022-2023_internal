import { Select } from 'components';
import { FC } from 'react';

type TFormWrapper = {
    initialValue: Array<any>;
    className: string;
};

const FormWrapper: FC<TFormWrapper> = ({ initialValue, className }) => {
    return (
        <div className={className}>
            {initialValue.map((item) => {
                return (
                    <div key={item.id}>
                        <label htmlFor={item.htmlFor} className={""}>
                            {item.label} {item.img === null ? '' : <img className="star" src={item.img} alt="star" />}
                            {item.selected ?
                                <Select
                                    className={''}
                                    htmlFor={item.htmlFor}
                                    name={item.id}
                                    onChange={item.onChange}
                                    options={item.options}
                                />
                                :
                                <input
                                    id={item.id}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    className={item.errors && item.touched ? 'defaultInput input-error' : 'defaultInput'}
                                    value={item.value}
                                    onChange={item.onChange}
                                    onBlur={item.onBlur}
                                    maxLength={item.maxLength}
                                    min={item.min}
                                    max={item.max}
                                />
                            }
                            {item.errors && item.touched && <span className='errors-icon'></span>}
                            {!item.errors && item.touched ? <span className='ok-icon'></span> : ''}
                        </label>
                        {item.errors && item.touched && <p className='errors'>{item.errors}</p>}
                    </div>
                );
            })}
        </div>
    );
};

export { FormWrapper };