import { FC, useState, useEffect, useRef } from "react";
import Chevron from 'img/svg/Expand_down.svg';
import { Button } from "components/UI";
import './accordion.scss';

type TAccordionProps = {
    title: string;
    description: string;
};

const Accordion: FC<TAccordionProps> = ({ title, description }) => {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState<string>();

    const refHeight = useRef<HTMLDivElement>(null);

    useEffect(() => {
        refHeight.current && setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, []);

    const toggleState = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className="accordion">
                <Button
                    className="accordion-visible"
                    onClick={() => toggleState()}
                >
                    <span>{title}</span>
                    <img className={toggle ? 'active' : ''} src={Chevron} alt="Chevron" />
                </Button>

                <div
                    className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
                    style={{ height: toggle ? `${heightEl}` : '0px' }}
                    ref={refHeight}
                >
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export { Accordion };