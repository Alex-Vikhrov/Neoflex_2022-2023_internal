import { FC, useState } from 'react';
import { ITab } from 'types';
import { Button } from '../Button';
import './tabs.scss';

type TTabsProps = {
    className?: string;
    tabs: Array<ITab>;
}

const Tabs: FC<TTabsProps> = ({
    className,
    tabs,
}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleActiveTab = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            {
                Object.keys(tabs).length === 0 ?
                    <div>
                        No Tabs
                    </div>
                    :
                    <>
                        <nav className={className || "tabbar"}>
                            <ul className='tabs'>
                                {
                                    tabs.map((tab, index: number) => {
                                        return (
                                            <li key={tab.id}>
                                                <Button
                                                    className={index === activeTab ? "tabbar__btn selected" : "tabbar__btn"}
                                                    onClick={() => handleActiveTab(index)}
                                                >
                                                    {tab.label}
                                                </Button>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </nav>
                        <>
                            {tabs[activeTab].component}
                        </>
                    </>
            }
        </>
    );
};

export { Tabs };