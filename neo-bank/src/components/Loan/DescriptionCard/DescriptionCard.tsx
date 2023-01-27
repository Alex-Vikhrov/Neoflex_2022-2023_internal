import { FC } from "react";
import cardImage from 'img/cardImageLoan.svg';
import { Button } from "components";
import { description } from "constant";

type TDescriptionCard = {
    smoothScroll: () => void
}

const DescriptionCard: FC<TDescriptionCard> = ({ smoothScroll }) => {
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
                <Button
                    className="description-card__button"
                    onClick={smoothScroll}
                >
                    Apply for card
                </Button>
            </article>
            <figure>
                <img src={cardImage} alt="credit card" />
            </figure>
        </section>
    );
};

export { DescriptionCard };