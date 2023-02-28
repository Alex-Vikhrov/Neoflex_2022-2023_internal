import { FC, useEffect, useRef } from "react";
import './pinCodeInput.scss';

type TPinCodeInputProps = {
    id: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value: string | number;
    maxLength: number;
    isFirst?: boolean;
    onBackspace?: () => void;
};

const PinCodeInput: FC<TPinCodeInputProps> = ({ maxLength, id, onChange, onBlur, value, isFirst, onBackspace }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleBackspace = (event: any) => {
            if (event.key === 'Backspace') {
                event.preventDefault();
                if (value !== '') {
                    onChange({
                        ...event,
                        target: {
                            ...event.target,
                            value: '',
                        },
                    });
                    if (onBackspace) {
                        onBackspace();
                    }
                } else if (!isFirst) {
                    const previousInput = inputRef.current?.previousSibling as HTMLInputElement;
                    if (previousInput) {
                        previousInput.focus();
                    }
                }
            }
        };

        const handleInput = (event: any) => {
            const input = event.target as HTMLInputElement;
            if (input.value.length >= maxLength) {
                const nextInput = inputRef.current?.nextSibling as HTMLInputElement;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        };

        const input = inputRef.current;
        if (input) {
            input.addEventListener('keydown', handleBackspace);
            input.addEventListener('input', handleInput);
            return () => {
                input.removeEventListener('keydown', handleBackspace);
                input.removeEventListener('input', handleInput);
            };
        }
    }, [maxLength, value, onChange, isFirst, onBackspace]);

    return (
        <div className="pin">
            <input
                id={id}
                className="pin__input"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={'ellipsis'}
                maxLength={maxLength}
                ref={inputRef}
            />
        </div>
    );
};

export { PinCodeInput };


// type TPinCodeInputProps = {
//     id: string;
//     onChange: (e: React.ChangeEvent<any>) => void;
//     onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
//     value: string | number;
//     maxLength: number;
// };

// const PinCodeInput: FC<TPinCodeInputProps> = ({ maxLength, id, onChange, onBlur, value }) => {
//     const inputRef = useRef<HTMLInputElement>(null);



//     const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
//         const input = event.currentTarget;
//         const maxLengthReached = input.value.length === maxLength;
//         if (maxLengthReached) {
//             const nextInput = input.nextElementSibling as HTMLInputElement;
//             if (nextInput) {
//                 nextInput.focus();
//             }
//         }
//     };

//     return (
//         <div className="pin">
//             <input
//                 id={id}
//                 className="pin__input"
//                 value={value}
//                 onBlur={onBlur}
//                 onChange={onChange}
//                 placeholder={'ellipse'}
//                 maxLength={maxLength}
//                 ref={inputRef}
//                 onInput={handleInput}
//             />
//         </div>
//     );
// };

// export { PinCodeInput };



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

    // useEffect(() => {
    //     const handleBackspace = (event: KeyboardEvent) => {
    //         if (event.key === 'Backspace') {
    //             const previousInput = inputRef.current?.previousSibling as HTMLInputElement;
    //             if (previousInput) {
    //                 previousInput.focus();
    //             }
    //         }
    //     };
    //     const handleInput = (event: any) => {
    //         const input = event.target as HTMLInputElement;
    //         if (input.value.length >= maxLength) {
    //             const nextInput = inputRef.current?.nextSibling as HTMLInputElement;
    //             if (nextInput) {
    //                 nextInput.focus();
    //             }
    //         }
    //     };
    //     const input = inputRef.current;
    //     if (input) {
    //         input.addEventListener('keydown', handleBackspace);
    //         input.addEventListener('input', handleInput);
    //         return () => {
    //             input.removeEventListener('keydown', handleBackspace);
    //             input.removeEventListener('input', handleInput);
    //         };
    //     }
    // }, [maxLength]);