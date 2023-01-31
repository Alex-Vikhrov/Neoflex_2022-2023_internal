import { Input } from "components/UI";
import { FC } from "react"
import { CustomizeTitle } from "./CustomizeTitle";
import './amount.scss';

type TProps = {
    ref?: React.RefObject<HTMLDivElement>;
    id: string,
    type: string,
    placeholder?: string,
    value: string,
    onChange: React.ChangeEventHandler,
    onBlur: React.ChangeEventHandler,
}

const AmountSelect: FC<TProps> = ({ ref, id, type, placeholder, value, onChange, onBlur }) => {

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
                        type={type}
                        className={'amoutSum'}
                        value={!value ? 15000 : value }
                        placeholder={""}
                        onBlur={onBlur}
                        onChange={onChange}
                    />
                    <Input
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
                        <span>15 000</span>
                        <span>600 000</span>
                    </div>
                </div>
            </div>
            <div className="dividers dashed"></div>
            <div className="customize-card__amount">
                <h3>You have chosen the amount</h3>
                <span>{!value ? 15000 : value} ₽</span>
                <div className="dividers solid"></div>
            </div>
        </div>
    );
};

export { AmountSelect }