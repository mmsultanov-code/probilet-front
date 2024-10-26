<template>
    <main-layout>
        <div class="container">
            <div class="main-news-list-container">
                <div class="page-title">
                    <h1>Новости</h1>
                </div>
                <div class="news-list-container" v-if="news.length">
                    <one-news-from-list v-for="(news, news_index) in news" :key="`news-item-${news_index}`" v-bind="news" />
                </div>
                <main-pagination />
            </div>
        </div>
    </main-layout>
</template>
<script>
export default {
    name: 'NewsIndex',
    data() {
        return {
            news: []
        }
    },
    mounted() {
        this.init_news()
    },
    methods: {
        init_news: function() {
            const news = []
            news.push({
                thumbnail: 'https://www.theartnewspaper.ru/media/original_images/1_gjEvZn4.jpg',
                title: 'Впервые на территории Узбекистана выступит легендарная группа Scorpions',
                excerpt: 'Владелец компаний SpaceX и X (бывший Twitter) Илон Маск вместе с премьер-министром Израиля Биньямином Нетаниягу посетил кибуц Кфар-Аза вблизи границы с сектором Газа, на который 7 октября напали боевики ХАМАС. «Я посетил кибуц Кфар-Газа с Илоном Маском, чтобы показать ему преступления против человечности, совершенные ХАМАС», — заявил израильский премьер. ',
                datetime: '19:05',
                date: '25 января 2024',
                link: 'news-slug'
            })
            news.push({
                thumbnail: 'https://otvet.imgsmail.ru/download/9cd61f9bc2690bb4a6949525f5368f77_i-8975.jpg',
                title: 'Впервые на территории Узбекистана выступит легендарная группа Scorpions',
                excerpt: 'Владелец компаний SpaceX и X (бывший Twitter) Илон Маск вместе с премьер-министром Израиля Биньямином Нетаниягу посетил кибуц Кфар-Аза вблизи границы с сектором Газа, на который 7 октября напали боевики ХАМАС. «Я посетил кибуц Кфар-Газа с Илоном Маском, чтобы показать ему преступления против человечности, совершенные ХАМАС», — заявил израильский премьер. ',
                datetime: '19:05',
                date: '25 января 2024',
                link: 'news-slug'
            })
            news.push({
                thumbnail: 'https://avatars.mds.yandex.net/get-altay/1592431/2a00000172c94a4967e79b67190881523340/XXL_height',
                title: 'Впервые на территории Узбекистана выступит легендарная группа Scorpions',
                excerpt: 'Владелец компаний SpaceX и X (бывший Twitter) Илон Маск вместе с премьер-министром Израиля Биньямином Нетаниягу посетил кибуц Кфар-Аза вблизи границы с сектором Газа, на который 7 октября напали боевики ХАМАС. «Я посетил кибуц Кфар-Газа с Илоном Маском, чтобы показать ему преступления против человечности, совершенные ХАМАС», — заявил израильский премьер. ',
                datetime: '19:05',
                date: '25 января 2024',
                link: 'news-slug'
            })
            news.push({
                thumbnail: 'https://www.scad.edu/sites/default/files/media/Events/Sidewalk%20Arts%20Festival/SidewalkArts2014_026-027_Chalkitecture_MN.jpg',
                title: 'Впервые на территории Узбекистана выступит легендарная группа Scorpions',
                excerpt: 'Владелец компаний SpaceX и X (бывший Twitter) Илон Маск вместе с премьер-министром Израиля Биньямином Нетаниягу посетил кибуц Кфар-Аза вблизи границы с сектором Газа, на который 7 октября напали боевики ХАМАС. «Я посетил кибуц Кфар-Газа с Илоном Маском, чтобы показать ему преступления против человечности, совершенные ХАМАС», — заявил израильский премьер. ',
                datetime: '19:05',
                date: '25 января 2024',
                link: 'news-slug'
            })
            this.news = news
        }
    }
}
</script>
<style lang="scss">
.main-news-list-container {
    margin-top: 24px;
}
</style>