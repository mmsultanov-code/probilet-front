<template>
    <section class="section-recomended">
        <div class="container">
            <div class="section-title">
                <h2>Мы рекомендуем</h2>
            </div>
        </div>
        <div class="swiper-slider-recomend-container">
            <Swiper v-bind="swiper_options">
                <SwiperSlide v-for="(item, event_index) in events" class="one-slide" :key="`event-index-${event_index}`">
                    <one-event v-bind="item" data-swiper-parallax="-23%" />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>
<script>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
export default {
    name: 'section-recomended',
    data() {
        return {
            events: [],
            swiper_options: {
                modules: [SwiperFreeMode, SwiperAutoplay],
                centeredSlides: false,
                freeMode: true,
                loop: true,
                spaceBetween: 24,
                slidesPerView: 7.6,
                navigation: false,
                pagination: { clickable: false },
                autoplay: { delay: 3000 }
            },
        }
    },
    mounted() {
        this.init_events()
    },
    methods: {
        init_events() {
            this.events = [
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 1',
                    excerpt: 'Excerpt 1',
                    place: 'Place 1',
                    date: '19 июня 2024 года',
                    image: '/img/popular-events/1.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 2',
                    excerpt: 'Excerpt 2',
                    place: 'Place 2',
                    date: '20 июня 2024 года',
                    image: '/img/popular-events/2.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 3',
                    excerpt: 'Excerpt 3',
                    place: 'Place 3',
                    date: '21 июня 2024 года',
                    image: '/img/popular-events/3.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 4',
                    excerpt: 'Excerpt 4',
                    place: 'Place 4',
                    date: '22 июня 2024 года',
                    image: '/img/popular-events/4.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 5',
                    excerpt: 'Excerpt 5',
                    place: 'Place 5',
                    date: '23 июня 2024 года',
                    image: '/img/popular-events/5.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 6',
                    excerpt: 'Excerpt 6',
                    place: 'Place 6',
                    date: '24 июня 2024 года',
                    image: '/img/popular-events/6.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 7',
                    excerpt: 'Excerpt 7',
                    place: 'Place 7',
                    date: '25 июня 2024 года',
                    image: '/img/popular-events/7.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 8',
                    excerpt: 'Excerpt 8',
                    place: 'Place 8',
                    date: '26 июня 2024 года',
                    image: '/img/popular-events/8.jfif',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 9',
                    excerpt: 'Excerpt 9',
                    place: 'Place 9',
                    date: '27 июня 2024 года',
                    image: '/img/popular-events/9.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 5',
                    excerpt: 'Excerpt 5',
                    place: 'Place 5',
                    date: '23 июня 2024 года',
                    image: '/img/popular-events/10.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 6',
                    excerpt: 'Excerpt 6',
                    place: 'Place 6',
                    date: '24 июня 2024 года',
                    image: '/img/popular-events/11.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 7',
                    excerpt: 'Excerpt 7',
                    place: 'Place 7',
                    date: '25 июня 2024 года',
                    image: '/img/popular-events/12.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 9',
                    excerpt: 'Excerpt 9',
                    place: 'Place 9',
                    date: '27 июня 2024 года',
                    image: '/img/popular-events/13.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 5',
                    excerpt: 'Excerpt 5',
                    place: 'Place 5',
                    date: '23 июня 2024 года',
                    image: '/img/popular-events/14.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 6',
                    excerpt: 'Excerpt 6',
                    place: 'Place 6',
                    date: '24 июня 2024 года',
                    image: '/img/popular-events/15.jpg',
                    link: '#'
                },
                {
                    tag_list: ['tag1', 'tag2'],
                    title: 'Title 7',
                    excerpt: 'Excerpt 7',
                    place: 'Place 7',
                    date: '25 июня 2024 года',
                    image: '/img/popular-events/16.jpg',
                    link: '#'
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.section-recomended {
    margin-top: 24px;
    padding-bottom: 12px;
    .swiper-slider-recomend-container {
        padding-inline: 12px;
        position: relative;
        // white gradient to transparent from left to right and right to left
        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 20%;
            height: 100%;
            background: linear-gradient(90deg, var(--body-color) 0%, rgba(255, 255, 255, 0) 100%);
            z-index: 2;
        }
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 20%;
            height: 100%;
            background: linear-gradient(270deg, var(--body-color) 0%, rgba(255, 255, 255, 0) 100%);
            z-index: 1;
        }
        // .one-slide {
        //     opacity: 0.5;
        //     &.swiper-slide-prev,
        //     &.swiper-slide-next,
        //     &.swiper-slide-active {
        //         opacity: 1;
        //     }
        // }
    }
}
</style>