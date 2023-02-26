import { FC } from "react";
// import { Input } from "../Input";
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
            <input
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



// import { FC, useRef } from "react";
// import './pinCodeInput.scss';

// type PinInputProps = {
//     id: string;
//     value: string;
//     error?: string;
//     touched?: boolean;
//     maxLength: number;
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
// };

// const PinCodeInput: FC<PinInputProps> = ({
//     id,
//     value,
//     error,
//     touched,
//     maxLength,
//     onChange,
//     onBlur,
// }) => {
//     const inputRef = useRef<HTMLInputElement>(null);

//     const focusNext = () => {
//         if (inputRef.current?.nextSibling) {
//             (inputRef.current.nextSibling as HTMLInputElement).focus();
//         }
//     };

//     const focusPrev = () => {
//         if (inputRef.current?.previousSibling) {
//             (inputRef.current.previousSibling as HTMLInputElement).focus();
//         }
//     };

//     const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         const value = event.currentTarget.value;
//         const regex = /^[0-9\b]+$/;

//         if (event.key === 'Tab') {
//             return;
//         }

//         if (!regex.test(value)) {
//             event.preventDefault();
//             return;
//         }

//         if (value.length >= maxLength) {
//             focusNext();
//         } else if (value.length === 0 && event.key === 'Backspace') {
//             focusPrev();
//         }
//     };

//     return (
//         <div className="pin">
//             <input
//                 ref={inputRef}
//                 id={id}
//                 name={id}
//                 type="text"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 autoComplete="off"
//                 value={value}
//                 maxLength={maxLength}
//                 onChange={onChange}
//                 onBlur={onBlur}
//                 onKeyDown={handleInput}
//             />
//             {error && touched && <div className="pin__input error">{error}</div>}
//         </div>
//     );
// };

// export { PinCodeInput };