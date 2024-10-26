<template>
    <main-content-page-layout>
        <div class="single-news-page-container">
            <article class="single-news-article main-article">
                <div class="thumbnail-side">
                    <img src="https://www.scad.edu/sites/default/files/media/Events/Sidewalk%20Arts%20Festival/SidewalkArts2014_026-027_Chalkitecture_MN.jpg" alt="">
                </div>
                <h1>Немного о Probilet</h1>
                <p><strong>Probilet</strong> - инновационная система онлайн и офлайн продаж билетов на развлекательные мероприятия любого масштаба, а именно: спектакли, концерты, мюзиклы, фестивали, спортивные мероприятия, а также любые мероприятия для детей. Заказ билетов осуществляется на сайте круглосуточно в режиме онлайн или у наших операторов, в рабочие часы кол-центра. Сайт предоставляет возможность купить электронный билет в любое удобное для вас время, не выходя из дома.</p>
                <p><strong>Probilet</strong> - инновационная система онлайн и офлайн продаж билетов на развлекательные мероприятия любого масштаба, а именно: спектакли, концерты, мюзиклы, фестивали, спортивные мероприятия, а также любые мероприятия для детей. Заказ билетов осуществляется на сайте круглосуточно в режиме онлайн или у наших операторов, в рабочие часы кол-центра. Сайт предоставляет возможность купить электронный билет в любое удобное для вас время, не выходя из дома.</p>
                <p><strong>Probilet</strong> - инновационная система онлайн и офлайн продаж билетов на развлекательные мероприятия любого масштаба, а именно: спектакли, концерты, мюзиклы, фестивали, спортивные мероприятия, а также любые мероприятия для детей. Заказ билетов осуществляется на сайте круглосуточно в режиме онлайн или у наших операторов, в рабочие часы кол-центра. Сайт предоставляет возможность купить электронный билет в любое удобное для вас время, не выходя из дома.</p>
            </article>
            <aside class="news-sidebar">
                <a href="#" class="one-news">
                    <span class="thumbnail-side">
                        <img src="https://avatars.mds.yandex.net/i?id=1378d5a3e0e22404c672b71425b7e89c_l-10178110-images-thumbs&n=13" alt="" />
                    </span>
                    <strong class="title">Впервые на территории Узбекистана выступит легендарная группа Scorpions</strong>
                    <p>Владелец компаний SpaceX и X (бывший Twitter) Илон Маск вместе с премьер-министром Израиля Биньямином Нетаниягу посетил кибуц Кфар-Аза вблизи границы с сектором Газа, на который 7 октября напали боевики ХАМАС. «Я посетил кибуц Кфар-Газа с Илоном Маском, чтобы показать ему преступления против человечности, совершенные ХАМАС», — заявил израильский премьер. </p>
                    <span class="meta-side">
                        <span class="datetime">19:05</span>
                        <span class="date">25 января 2024</span>
                    </span>
                </a>
                <a href="#" class="one-news">
                    <span class="thumbnail-side">
                        <img src="https://i4.photo.2gis.com/images/branch/23/3236962255628161_54cc.jpg" alt="" />
                    </span>
                    <strong class="title">Впервые на территории Узбекистана выступит легендарная группа Scorpions</strong>
                    <p>Владелец компаний SpaceX и X (бывший Twitter) Илон Маск вместе с премьер-министром Израиля Биньямином Нетаниягу посетил кибуц Кфар-Аза вблизи границы с сектором Газа, на который 7 октября напали боевики ХАМАС. «Я посетил кибуц Кфар-Газа с Илоном Маском, чтобы показать ему преступления против человечности, совершенные ХАМАС», — заявил израильский премьер. </p>
                    <span class="meta-side">
                        <span class="datetime">19:05</span>
                        <span class="date">25 января 2024</span>
                    </span>
                </a>
            </aside>
        </div>
    </main-content-page-layout>
</template>
<style lang="scss" scoped>
.single-news-page-container {
    align-items: flex-start;
    display: flex;
    & > * {
        margin-right: 24px;
        &:last-child {
            margin-right: 0;
        }
    }
    .single-news-article {
        max-width: calc(100% - 270px);
        width: 100%;
    }
    .news-sidebar {
        max-width: 270px;
        width: 100%;
        .one-news {
            background-color: #fff;
            color: var(--text-color);
            text-decoration: none;
            border-radius: 12px;
            margin: 0 0 12px;
            display: block;
            padding: 12px;
            &:last-child {
                margin-bottom: 0;
            }
            .thumbnail-side {
                line-height: 0;
                img {
                    border-radius: 6px;
                }
            }
            .title {
                line-height: 1.4;
                font-weight: 600;
                color: #252525;
                font-size: 18px;
                margin: 0 0 6px;
                display: block;
                
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            p {
                -webkit-line-clamp: 3;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                line-height: 1.4;
                font-size: 16px;
                color: #252525;
            }
            .meta-side {
                .datetime, .date {
                    color: var(--text-color);
                    font-size: 14px;
                }
                .datetime {
                    margin-right: 12px;
                }
            }
        }
    }
}
</style>