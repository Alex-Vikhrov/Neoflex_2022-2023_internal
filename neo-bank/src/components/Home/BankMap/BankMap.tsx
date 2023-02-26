import { FC } from 'react';
import world from 'img/png/world.png';
import './bankMap.scss';

const BankMap: FC = () => {
    return (
        <section className="world">
            <h3>You can use our services anywhere in the world</h3>
            <figure>
                <figcaption>Withdraw and transfer money online through our application</figcaption>
                <img className="world__map" src={world} alt="world" />
            </figure>
        </section>
    );
};

export { BankMap };