import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ILinks } from 'types';
import { Button, NavBar } from '../UI';
import './header.scss';

const links: Array<ILinks> = [
    { id: 1, children: 'Credit card', to: '/loan' },
    { id: 2, children: 'Product', to: '/product' },
    { id: 3, children: 'Account', to: '/account' },
    { id: 4, children: 'Resources', to: '/resources' }
];

const Header: FC = () => {
    return (
        <header>
            <section className="menu">
                <p>
                    <Link className="menu__h1" to='/'>
                        NeoBank
                    </Link>
                </p>

                <div>
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__hamburger" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <div className="overlayer"></div>
                    <NavBar links={links} />
                    <Button>
                        Online Bank
                    </Button>
                </div>

                <Button className="menu__button">
                    Online Bank
                </Button>
            </section>
        </header>
    );
};

export { Header };