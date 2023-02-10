import { FC, ReactElement, useState } from "react";

type TToolTipProps = {
    children: string | ReactElement;
    text: string;
};

const ToolTip: FC<TToolTipProps> = ({ children, text }) => {
    const [showToolTip, setShowToolTip] = useState(false);

    const onMouseEnterHandler = () => {
        setShowToolTip(true);
    };

    const onMouseLeaveHandler = () => {
        setShowToolTip(false);
    };

    return (
        <div className={'wrapper'} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            {children}
            {showToolTip && <div className={'tooltip'}>{text}</div>}
        </div>
    );
};

export { ToolTip };