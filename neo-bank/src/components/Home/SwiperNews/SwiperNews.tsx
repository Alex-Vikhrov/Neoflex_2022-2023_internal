import { Swiper } from 'components/UI';
import { FC } from 'react';

type TSwiperNewsProps = {
    news: Array<string>
};

let cardCount = 0;
let currentActiveIndex = 0;
const slidesToShow = 3;
const slidesToScroll = 1;

const SwiperNews: FC<TSwiperNewsProps> = ({ news }) => {
    cardCount = news.length;

    const btnPrevElement = () => {
        currentActiveIndex = Math.max(currentActiveIndex - slidesToScroll, 0);
    };
    const btnNextElement = () => {
        currentActiveIndex = Math.min(currentActiveIndex + slidesToScroll, cardCount);
    };

    return (
        <section className="news">
            <h3>Current news from the world of finance</h3>
            <p>
                We update the news feed every 15 minutes. You can learn more by clicking on the news you are
                interested in.
            </p>
            <Swiper
                news={news}
                btnPrevElement={btnPrevElement}
                btnNextElement={btnNextElement}
                currentActiveIndex={currentActiveIndex}
                cardCount={cardCount}
                slidesToShow={slidesToShow}
            />
        </section>
    );
};

export { SwiperNews };