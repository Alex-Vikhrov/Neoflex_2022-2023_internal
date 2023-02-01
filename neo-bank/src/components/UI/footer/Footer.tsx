import { FC } from 'react';
import logo from 'img/logo.png';
import './footer.scss';

type TFooterProps = {
    footerMenu: Array<string>
};

const Footer: FC<TFooterProps> = ({ footerMenu }) => {
    return (
        <footer>
            <section className="footer">
                <div className="footer__head">
                    <a href="https://www.neoflex.ru/" target="_blank"
                        title="Заходите к нам на сайт будем рады вас видеть !">
                        <figure>
                            <img src={logo} alt="logo" />
                        </figure>
                    </a>
                    <span>
                        <a href="tel:+74959842513" className="footer__phone" title="Нажмите чтобы позвонить">+7 (495)
                            984 25 13</a>
                        <a href="mailto:info@neoflex.ru" className="footer__mail" target="_blank"
                            title="Или напишите нам">info@neoflex.ru</a>
                    </span>
                </div>
                <nav className="footer__navbar">
                    <ul className="footer__list">
                        {
                            footerMenu.map((item, index) => {
                                return (
                                    <li className="footer__item" key={index}>
                                        <a href="#" className="footer__link">{item}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
                <div className="horizontal-line"></div>
                <p className="footer__cooki">
                    We use cookies to personalize our services and improve the user experience of our website.
                    Cookies
                    are small files containing information about previous visits to a website. If you do not want to
                    use
                    cookies, please change your browser settings
                </p>
            </section>
        </footer>
    );
};

export { Footer };