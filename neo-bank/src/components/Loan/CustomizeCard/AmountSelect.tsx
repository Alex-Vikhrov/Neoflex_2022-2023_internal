import { Input } from "components/UI";
import { FC, useState } from "react"
import { CustomizeTitle } from "./CustomizeTitle";
import './amount.scss';

type TProps = {
    ref?: React.RefObject<HTMLDivElement>;
    id: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: React.ChangeEventHandler,
    onBlur: React.ChangeEventHandler,
}

const AmountSelect: FC<TProps> = ({ ref, id, type, placeholder, value, onChange, onBlur }) => {
    // const [amount, setValue] = useState(150000);

    return (
        <div className="customize-card__wrapper" ref={ref}>
            <div className="customize-card__select">
                <CustomizeTitle
                    title={'Customize your card'}
                    step={1}
                />
                <div className="customize-card__select-amount">
                    <h3>Select amount</h3>
                    <Input
                        id={id}
                        className={'amoutSum'}
                        value={value}
                        placeholder={""}
                        onBlur={onBlur}
                        onChange={onChange}
                        // onChange={(e: any) => setValue(isNaN(+e.target.value) ? 15000 : +e.target.value)}
                    />
                    <Input
                        id={id}
                        className={'amountRange'}
                        type={'range'}
                        min={15000}
                        max={600000}
                        step={1000}
                        value={value}
                        placeholder={""}
                        onBlur={onBlur}
                        onChange={onChange}
                        // onChange={(e: any) => setValue(+e.target.value)}
                        // onBlur={undefined}
                    />
                    <div className="amount__min-max">
                        <span>15 000</span>
                        <span>600 000</span>
                    </div>
                </div>
            </div>
            <div className="dividers dashed"></div>
            <div className="customize-card__amount">
                <h3>You have chosen the amount</h3>
                <span>{value} ₽</span>
                <div className="dividers solid"></div>
            </div>
        </div>
    );
};

export { AmountSelect }