import { FC, useRef, useState } from "react";
import { Input } from "../Input";
import './pinCodeInput.scss';
import ellipse from 'img/Ellipse.svg';

type TPinCodeInputProps = {
    digits: Array<string>;
    changeHandler: any;
}

const PinCodeInput: FC<TPinCodeInputProps> = ({ digits, changeHandler }) => {
    const [focused, setFocused] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);
    const length = digits.length;
    // здесь будут ссылки на input-элементы
    const inputRefs = useRef<any>([]);

    const handleChange = (index: number, newValue: string) => {
        const oldDigit = digits[index];
        // старую цифру в поле ввода убираем, оставляя только новую
        const newDigit = newValue.trim().replace(oldDigit, '');
        // если это не цифра, ничего не делаем, пока не будет цифры
        if (newDigit < '0' || newDigit > '9') return;
        // теперь вызываем callback родителя, чтобы обовить digits
        const newDigits = [...digits]; // копия digits
        newDigits[index] = newDigit;
        changeHandler(newDigits);
        // смещаем фокус на следующее поле для ввода следующей цифры
        if (index < length - 1) {
            inputRefs.current[index + 1].focus();
        } else { // или убираем фокус, если это было последнее поле
            inputRefs.current[index].blur();
        }
    }

    return (
        <div className="pin">
            {digits.map((digit, index) => {
                return <>
                    <Input
                    // ref={inputRefs}
                        id={'pin'}
                        className="pin__input"
                        key={index}
                        value={digit}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={event => handleChange(index, event.target.value)}
                        placeholder={'ellipse'}
                    />
                    {/* <label htmlFor="pin">
                        <img src={ellipse} alt="" className={focused ? "pin__ellipse focus" : "pin__ellipse"} />
                    </label> */}
                </>
            })}
        </div>
    );
};

export { PinCodeInput };