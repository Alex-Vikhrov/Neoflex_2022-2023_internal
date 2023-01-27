import { FC } from 'react';
import { Button } from '../../UI';
import { cardImages } from 'constant';

const ChooseCreditCard: FC = () => {
    return (
        <section className="card">
            <div className="card__choice">
                <h2>
                    <span>Choose the design you like</span>
                    <span>and apply for card right</span>
                    <span>now</span>
                </h2>

                <Button className="card__button">
                    Choose the card
                </Button>
            </div>
            <div className="card__grid">
                {
                    cardImages.map((image) => {
                        return (
                            <figure key={image.id}>
                                <img src={image.img} alt={image.alt} />
                            </figure>
                        );
                    })
                }
            </div>
        </section>
    );
};

export { ChooseCreditCard };