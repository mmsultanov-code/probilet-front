<template>
    <section class="section-popular-events">
        <div class="container">
            <div class="section-itlte">
                <h2>Популярные события</h2>
            </div>
            <div class="columns column-4">
                <one-event v-bind="item" v-for="(item, event_index) in events" :key="`event-index-${event_index}`" />
            </div>
            <div class="spacer"></div>
            <div class="text-center">
                <button class="theme-button red" type="button">Загрузить ещё</button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            events: []
        }
    },
    mounted() {
        this.init_data()
    },
    methods: {
        init_data() {
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
.section-popular-events {
    margin-top: 24px;
}
</style>