import { api } from './api.js';

let track = document.getElementById('track');
let cardCount = 0;

function clearInnerHTMLSwiper() {
    track.innerHTML = "";
}

function enterSliderInnerHTML() {
    api.fetchBusinessNews().then((response) => {
        clearInnerHTMLSwiper();
        cardCount = response.data.articles.length;
        response.data.articles.map((item) => {
            let content = track.innerHTML;

            content += `<div class="swiper__card">
              <figure>
                  <img src="${item.urlToImage || './img/news.jpg'} " alt="news" width="256px" height="120px"/>
                  <figcaption>${item.title}</figcaption>
              </figure>
              <a href="${item.url}" target="_blank">
                  <p>${item.description}</p>
              </a>
            </div>`

            track.innerHTML = content;
        })
        checkBtns();
    }).catch((error) => {
        console.error(error);
    });
}

enterSliderInnerHTML();

let currentActiveIndex = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const trackSwiper = document.querySelector('.swiper__track');
const btnPrevElement = document.getElementById('prev');
const btnNextElement = document.getElementById('next');

btnNextElement.addEventListener('click', () => {
    currentActiveIndex = Math.min(currentActiveIndex + slidesToScroll, cardCount);
    trackSwiper.children[currentActiveIndex].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
    checkBtns();
});

btnPrevElement.addEventListener('click', () => {
    currentActiveIndex = Math.max(currentActiveIndex - slidesToScroll, 0);
    trackSwiper.children[currentActiveIndex].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
    checkBtns();
});

const checkBtns = () => {
    btnNextElement.disabled = currentActiveIndex === cardCount - slidesToShow;
    btnPrevElement.disabled = currentActiveIndex === 0;
};

checkBtns();

setInterval(() => {
    enterSliderInnerHTML();
}, api.updateRequest(1000, 60, 15)); // ms, seconds, minuts