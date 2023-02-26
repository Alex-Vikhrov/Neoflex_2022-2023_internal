import { FC } from "react";
import cardImage from 'img/svg/cardImageLoan.svg';
import { Button } from "components";
import './description.scss';
import { Link } from "react-router-dom";
import { RouteNames } from "router/routes";

type TDescriptionCard = {
    smoothScroll: () => void;
    offers?: any;
    applicationId?: number;
};

type TDescription = {
    id: number,
    title: string,
    caption: string,
    content: string,
};

const description: Array<TDescription> = [
    {
        id: 1,
        title: 'When repaying the full debt up to 160 days.',
        caption: 'Up to 160 days',
        content: 'No percent',

    },
    {
        id: 2,
        title: 'Over the limit willaccrue percent',
        caption: 'Up to 600 000 ₽',
        content: 'Credit limit',
    },
    {
        id: 3,
        title: 'Promotion valid until December 31, 2022.',
        caption: '0 ₽',
        content: 'Card service is free',
    },
];

const DescriptionCard: FC<TDescriptionCard> = ({ applicationId, offers, smoothScroll }) => {
    return (
        <section className="description-card">
            <article className="description-card__info">
                <h2>Platinum digital credit card</h2>
                <p>Our best credit card. Suitable for everyday spending and shopping.</p>
                <p>Cash withdrawals and transfers without commission and interest.</p>
                <aside>
                    {description.map((item) => {
                        return (
                            <div key={item.id} title={item.title}>
                                <h3>{item.caption}</h3>
                                <span>{item.content}</span>
                            </div>
                        )
                    })}
                </aside>
                {
                    applicationId ?
                        <Link className="description-card__link" to={RouteNames.LOAN + `/${applicationId}`}>
                            Continue registration
                        </Link> :
                        <Button
                            className="description-card__button"
                            onClick={smoothScroll}
                        >
                            {offers.length <= 0 ? 'Apply for card' : 'Choose an offer'}
                        </Button>
                }
            </article>
            <figure>
                <img src={cardImage} alt="credit card" />
            </figure>
        </section>
    );
};

export { DescriptionCard };