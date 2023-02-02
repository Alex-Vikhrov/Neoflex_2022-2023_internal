import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ILinks } from "types";

type TNavBar = {
    className?: string;
    links: Array<ILinks>
}

const NavBar: FC<TNavBar> = ({ className, links }) => {
    return (
        <nav className={className || "menu__navbar"}>
            <ul className="menu__list">
                {
                    links.map((link) => {
                        return (
                            <li className="menu__item" key={link.id}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'menu__link active' : "menu__link")}
                                    to={link.to ? link.to : '/404'}
                                >
                                    {link.children}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export { NavBar };