<template>
    <div className="intro-slider">
        <Swiper v-bind="swiperOptions">
            <SwiperSlide>
                <div className="one-slide" style="background-image: url('/img/intro/slider/1.webp')">
                    <div className="bottom-content">
                        <nav className="tag-list">
                            <ul>
                                <li><a href="#">Фестивали</a></li>
                                <li><a href="#">Осень</a></li>
                                <li><a href="#">Тест</a></li>
                            </ul>
                        </nav>
                        <strong className="title">МОК Фестиваль</strong>
                        <p>Массовое празднество, показ (смотр) достижений музыкального, театрального, эстрадного, циркового или киноискусства</p>
                        <div class="spacer"></div>
                        <button type="button" class="theme-button red">Подробнее</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="one-slide" style="background-image: url('/img/intro/slider/2.gif')">
                    <div className="bottom-content">
                        <nav className="tag-list">
                            <ul>
                                <li><a href="#">Фестивали</a></li>
                                <li><a href="#">Осень</a></li>
                                <li><a href="#">Тест</a></li>
                            </ul>
                        </nav>
                        <strong className="title">Полина Гагарина</strong>
                        <p>Поли́на Серге́евна Гага́рина — российская эстрадная певица, актриса кино, телевидения, озвучивания и дубляжа, композитор и фотомодель. Участница и победительница проекта Первого канала «Фабрика звёзд-2». Участвовала в конкурсе «Новая волна», заняла третье место.</p>
                        <div class="spacer"></div>
                        <button type="button" class="theme-button red">Подробнее</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="one-slide" style="background-image: url('/img/intro/slider/3.webp');">
                    <div className="bottom-content">
                        <nav className="tag-list">
                            <ul>
                                <li><a href="#">Фестивали</a></li>
                                <li><a href="#">Осень</a></li>
                                <li><a href="#">Тест</a></li>
                            </ul>
                        </nav>
                        <strong className="title">Юлдуз Усманова_гр</strong>
                        <p>Юлдуз Ибрагимовна Усманова - — известная как «примадонна узбекской эстрады» «королева узбекской эстрады, O’zbekiston Qirolichasi», узбекская эстрадная певица, композитор, поэт-песенник, продюсер, Народная артистка Узбекистана, Народная артистка Казахстана и Таджикистана. Заслуженная артистка Туркменистана.</p>
                        <div class="spacer"></div>
                        <button type="button" class="theme-button red">Подробнее</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="one-slide" style="background-image: url('/img/intro/slider/4.gif')">
                    <div className="bottom-content">
                        <nav className="tag-list">
                            <ul>
                                <li><a href="#">Фестивали</a></li>
                                <li><a href="#">Осень</a></li>
                                <li><a href="#">Тест</a></li>
                            </ul>
                        </nav>
                        <strong className="title">БАСТА</strong>
                        <p>БАСТА - один из главных исполнителей российской сцены, настоящий народный артист, песни которого разлетаются на цитаты. Он пишет альбомы, снимает кино, ведет программы, проводит шоу с профессиональными боксерскими поединками, радуется сам и радует неравнодушного зрителя. Без сомнения Баста - это эпоха.  Концерт БАСТЫ это более двух часов самых любимых песен в унисон с залом. Все что вы хотели услышать вы услышите - начиная с хитов с альбома "Баста 1", заканчивая самыми последними песнями: Моя игра, Урбан, Чистый кайф, Сансара, Я поднимаюсь над землей, Ты моя вселенная, Лёд, Хендсап, Медлячок, Когда я смотрю на небо, Без тебя, Неболей, Ты была права...</p>
                        <div class="spacer"></div>
                        <button type="button" class="theme-button red">Подробнее</button>
                    </div>
                </div>
            </SwiperSlide>
            <div class="custom-swiper-navigation">
                <button type="button" class="button-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#252525" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.167 16.375 7 12m0 0 4.167-4.375M7 12h10"></path></svg>
                </button>
                <button type="button" class="button-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#252525" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.833 7.625 17 12m0 0-4.167 4.375M17 12H7"></path></svg>
                </button>
            </div>
        </Swiper>
    </div>
</template>
<script lang="ts" setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
const swiperOptions = ref({
    loop: true,
    spaceBetween: 12,
    slidesPerView: 1,
    effect: 'fade',
    modules: [SwiperNavigation, SwiperEffectFade, SwiperAutoplay],
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.custom-swiper-navigation .button-next',
        prevEl: '.custom-swiper-navigation .button-prev'
    },
    autoplay: { delay: 3000 }
});
</script>
<style lang="scss" scoped>
.intro-slider {
    max-width: calc(100% - 270px);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    width: 100%;
    .custom-swiper-navigation {
        position: absolute;
        bottom: 24px;
        right: 24px;
        z-index: 3;
        button {
            background-color: #EEF3F5D9;
            margin-right: 10px;
            border-radius: 8px;
            height: 40px;
            border: none;
            width: 40px;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background-color: #fff;
                cursor: pointer;
            }
        }
    }
    .one-slide {
        background-position: center;
        background-size: cover;
        align-items: flex-end;
        border-radius: 12px;
        position: relative;
        overflow: hidden;
        padding: 24px;
        display: flex;
        height: 520px;
        &::before {
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            display: block;
            height: 100%;
            content: '';
            width: 100%;
            left: 0;
            top: 0;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .bottom-content {
            position: relative;
            color: #fff;
            max-width: 60%;
            .tag-list {
                margin: 0 0 12px;
                ul {
                    list-style: none;
                    line-height: 1;
                    padding: 0;
                    margin: 0;
                    li {
                        display: inline-block;
                        vertical-align: top;
                        margin-right: 6px;
                        &:last-child {
                            margin-right: 0;
                        }
                        a {
                            background-color: var(--body-color);
                            color: var(--text-color);
                            text-decoration: none;
                            border-radius: 6px;
                            padding: 6px 12px;
                            font-weight: 500;
                            font-size: 14px;
                            display: block;
                            &:hover {
                                background-color: var(--theme-color);
                                text-decoration: none;
                                color: #fff;
                            }
                        }
                    }
                }
            }
            .title {
                font-weight: 100;
                margin: 0 0 12px;
                font-size: 36px;
                display: block;
                line-height: 1;
            }
            p {
                margin: 0;
                -webkit-line-clamp: 2; /* Число отображаемых строк */
                display: -webkit-box; /* Включаем флексбоксы */
                -webkit-box-orient: vertical; /* Вертикальная ориентация */
                overflow: hidden; /* Обрезаем всё за пределами блока */
            }
        }
    }
}
</style>