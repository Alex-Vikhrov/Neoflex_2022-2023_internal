import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { NavBar } from '../navbar';
import './header.scss';

type TNavBar = {
    links: Array<any>
}

const Header: FC<TNavBar> = ({ links }) => {
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