import { FC } from "react";
import { Input } from "../Input";
import './pinCodeInput.scss';


type TPinCodeInputProps = {
    // digits: Array<string>;
    // changeHandler: any;
    id: string,
    onChange: any,
    onBlur: any,
    // onFocus: any,
    value: any,
    maxLength: number,
}

const PinCodeInput: FC<TPinCodeInputProps> = ({ maxLength, id, onChange, onBlur, value }) => {
    return (
        <div className="pin">
            <Input
                id={id}
                className="pin__input"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={'ellipse'}
                maxLength={maxLength}
            />
        </div>
    );
};

export { PinCodeInput };