import { FC } from "react";
import { Button } from '../button';
import newsImg from 'img/news.jpg';

type TSwiperProps = {
    news: Array<string>;
    btnPrevElement: () => void;
    btnNextElement: () => void;
    currentActiveIndex: number;
    cardCount: number;
    slidesToShow: number;
};

const Swiper: FC<TSwiperProps> = ({
    news,
    btnPrevElement,
    currentActiveIndex,
    btnNextElement,
    cardCount,
    slidesToShow
}) => {
    return (
        <div className="swiper">
            <div className="swiper__container">
                <div className="swiper__track" id="track">
                    {news.map((card: any, index: number) => {
                        return (
                            <div key={index} className="swiper__card">
                                <figure>
                                    <img src={card.urlToImage || newsImg} alt="news" width="256px" height="120px" />
                                    <figcaption>{card.title}</figcaption>
                                </figure>
                                <a href={card.url} target="_blank">
                                    <p>{card.description}</p>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="swiper__buttons">
                <Button
                    className="swiper-prev"
                    id="prev"
                    onClick={btnPrevElement}
                    disabled={currentActiveIndex === 0}
                >
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25"
                            stroke="#333" />
                    </svg>
                </Button>
                <Button
                    className="swiper-next"
                    id="next"
                    onClick={btnNextElement}
                    disabled={currentActiveIndex === cardCount - slidesToShow}
                >
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0"
                            stroke="white" />
                    </svg>
                </Button>
            </div>
        </div>
    )
};

export { Swiper };