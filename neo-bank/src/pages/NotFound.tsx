import { FC } from "react";
import {
    Footer,
    Header,
} from "../components";
import { links } from "../constant/linksNavBar";
import oops from 'img/404.png';
import { Link } from "react-router-dom";
import { footerItem } from "constant/footer";

const NotFound: FC = () => {
    return (
        <div className="wrapper">
            <Header links={links} />
            <main>
                <div className="wrapper__main">
                    <section className="oops">
                        <div>
                            <h3>Oops...</h3>
                            <p>Page not found</p>
                            <aside>This Page doesn`t exist or was removed! We suggest you go back.</aside>
                            <Link className="oops__btn" to='/'>
                                Go back
                            </Link>
                        </div>
                        <figure>
                            <img src={oops} alt="404" />
                        </figure>
                    </section>
                </div>
            </main>
            <Footer footerMenu={footerItem} />
        </div>
    );
};

export { NotFound };