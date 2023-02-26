import { Range } from "components";
import { FC } from "react"
import { CustomizeTitle } from "../CustomizeCard/CustomizeTitle";

type TProps = {
    ref?: React.RefObject<HTMLDivElement>;
    id: string,
    type: string,
    placeholder?: string,
    value: string | number,
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
                    <Range
                        title={"Select amount"}
                        min={"15 000"}
                        max={"600 000"}
                        id={id}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange} />
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

export { AmountSelect };