let track = document.getElementById('track');
let cardCount = 0;

function clearInnerHTML() {
    track.innerHTML = "";
}

function enterSliderInnerHTML() {
    const apiKey = '48c961b42cba45b18db7abaa46e4397c';
    const business = axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);

    business.then((response) => {
        clearInnerHTML();
        cardCount = response.data.articles.length;
        response.data.articles.map((item) => {
            let content = track.innerHTML;

            content += `<div class="swiper__card">
              <figure>
                  <img src="${item.urlToImage}" alt="news" width="256px" height="120px"/>
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


// setTimeout(() => {
//     let position = 0;
//     const slidesToShow = 4;
//     const slidesToScroll = 1;
//     const container = document.querySelector('.swiper__container');
//     const track = document.querySelector('.swiper__track');
//     const card = document.querySelectorAll('.swiper__card');
//     const cardCount = document.querySelectorAll('.swiper__card').length;
//     const btnPrev = document.getElementById('prev');
//     const btnNext = document.getElementById('next');
//     const itemWidth = /* 325; */(container.clientWidth / slidesToShow); /* slidesToShow */
//     const movePosition = 500;/* slidesToScroll * (itemWidth); //325 */

//     console.log(itemWidth);
//     console.log(container.clientWidth);
//     console.log(movePosition);


//     card.forEach((item) => {
//         item.style.minWidth = `${itemWidth}px`;
//     });

//     console.log(cardCount);


//     btnNext.addEventListener('click', () => {
//         const cardsLeft = cardCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
//         // console.log(cardsLeft);
//         // position -= movePosition;
//         position -= cardsLeft >= slidesToScroll ? movePosition : cardsLeft * itemWidth;
//         console.log(position);

//         setPosition();
//         checkBtns();
//     });

//     btnPrev.addEventListener('click', () => {
//         const cardsLeft = Math.abs(position) / itemWidth;
//         console.log(cardsLeft);
//         // position += movePosition;
//         console.log(cardsLeft >= slidesToScroll ? movePosition : cardsLeft * itemWidth);
//         position += cardsLeft >= slidesToScroll ? movePosition : cardsLeft * itemWidth;
//         console.log(position);
//         setPosition();
//         checkBtns();
//     });

//     const setPosition = () => {
//         track.style.transform = `translateX(${position}px)`;
//     };

//     const checkBtns = () => {
//         btnNext.disabled = position <= -(cardCount - slidesToShow) * itemWidth;
//         btnPrev.disabled = position === 0;
//     };

//     checkBtns();
// }, 1000);


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
    btnNextElement.disabled = currentActiveIndex === cardCount - 3;
    btnPrevElement.disabled = currentActiveIndex === 0;
};

checkBtns();

setInterval(() => {
    enterSliderInnerHTML();
}, 900000);








