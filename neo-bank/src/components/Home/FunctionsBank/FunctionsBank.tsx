import React, { FC } from 'react';
import pepoleImage from 'img/Illustration2.svg';
import { functionsList } from 'constant';

const FunctionsBank: FC = () => {
    return (
        <section className="functions">
            <figure>
                <img src={pepoleImage} alt="pepole" />
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