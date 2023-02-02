import { Slider } from 'components';
import { FC } from 'react';
import { ICard } from 'types';
import './news.scss';

type TSliderNewsProps = {
    news: Array<ICard>
};

const slidesToShow = 3;
const slidesToScroll = 1;

const SliderNews: FC<TSliderNewsProps> = ({ news }) => {

    return (
        <section className="news">
            <h3>Current news from the world of finance</h3>
            <p>
                We update the news feed every 15 minutes. You can learn more by clicking on the news you are
                interested in.
            </p>
            <Slider
                news={news}
                slidesToScroll={slidesToScroll}
                slidesToShow={slidesToShow}
            />
        </section>
    );
};

export { SliderNews };