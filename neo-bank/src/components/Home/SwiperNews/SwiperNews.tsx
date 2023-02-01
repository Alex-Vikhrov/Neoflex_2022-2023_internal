import { Swiper } from 'components/UI';
import { FC } from 'react';
import { ICard } from 'types';
import './news.scss';

type TSwiperNewsProps = {
    news: Array<ICard>
};

const slidesToShow = 3;
const slidesToScroll = 1;

const SwiperNews: FC<TSwiperNewsProps> = ({ news }) => {

    return (
        <section className="news">
            <h3>Current news from the world of finance</h3>
            <p>
                We update the news feed every 15 minutes. You can learn more by clicking on the news you are
                interested in.
            </p>
            <Swiper
                news={news}
                slidesToScroll={slidesToScroll}
                slidesToShow={slidesToShow}
            />
        </section>
    );
};

export { SwiperNews };