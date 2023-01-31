import { FC } from 'react';
import peopleImage from 'img/Illustration2.svg';
import verctor from 'img/Vector.svg';
import './functionsBank.scss';

type TFunctionsList = {
    id: number;
    icon: string;
    children: string;
}

const functionsList: Array<TFunctionsList> = [
    {
        id: 1,
        icon: verctor,
        children: 'Powerfull online protection.',
    },
    {
        id: 2,
        icon: verctor,
        children: 'Cashback without borders.',
    },
    {
        id: 3,
        icon: verctor,
        children: 'Personal design',
    },
    {
        id: 4,
        icon: verctor,
        children: 'Work anywhere in the world',
    },
];

const FunctionsBank: FC = () => {
    return (
        <section className="functions">
            <figure>
                <img src={peopleImage} alt="pepole" />
            </figure>
            <div className="functions__case">
                <h3>We Provide Many Features You Can Use</h3>
                <aside>
                    <span>
                        You can explore the features that we provide with fun and have their own functions each
                        feature
                    </span>
                </aside>
                <ul className="functions__list">
                    {
                        functionsList.map((item) => {
                            return (
                                <li className='functions__item' key={item.id}>
                                    <img className="fa-check-circle" src={item.icon} alt="yes" />
                                    {item.children}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export { FunctionsBank };