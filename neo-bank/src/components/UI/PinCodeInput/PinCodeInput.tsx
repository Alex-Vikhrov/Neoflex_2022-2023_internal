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