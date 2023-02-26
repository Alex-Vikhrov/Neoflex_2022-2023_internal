import { FC } from 'react';
import oops from 'img/png/404.png';
import { Link } from "react-router-dom";
import './not-404.scss';

const Not_404: FC = () => {
    return (
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
    );
};

export { Not_404 };