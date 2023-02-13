import { FC } from "react";
import { Input } from "../Input";
import './pinCodeInput.scss';


type TPinCodeInputProps = {
    id: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: React.FocusEvent<any, Element>) => void;
    value: string | number;
    maxLength: number;
};

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