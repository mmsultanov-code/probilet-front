<template>
    <div class="intro-news-box">
        <nuxt-link :to="`/${$i18n.locale}/news`" class="widget-title">
            <span>Новости</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
            </svg>
        </nuxt-link>
        <div class="widget-news-list-container">
            <a href="#" class="one-news" style="background-image: url('/img/intro/news/1.webp')">
                <span class="bottom-content">
                    <strong class="title">Заголовок новости</strong>
                </span>
            </a>
            <a href="#" class="one-news" style="background-image: url('/img/intro/news/2.webp')">
                <span class="bottom-content">
                    <strong class="title">Теперь мы доступны в гугл плей</strong>
                </span>
            </a>
            <a href="#" class="one-news" style="background-image: url('/img/intro/news/3.webp')">
                <span class="bottom-content">
                    <strong class="title">Новые мероприятия уже скоро</strong>
                </span>
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.intro-news-box {
    max-width: 336px;
    width: 100%;
    .widget-title {
        color: var(--text-color);
        text-decoration: none;
        align-items: center;
        line-height: 1;
        display: flex;
        svg {
            transform: translateY(1px);
            height: 16px;
            width: 16px;
        }
    }
    .widget-news-list-container {
        border-radius: 0 12px 12px 12px;
        background-color: #fff;
        margin-top: 12px;
        padding: 12px;
        width: 100%;
        .one-news {
            height: calc(520px / 3 - 25px);
            background-position: center;
            background-size: cover;
            text-decoration: none;
            align-items: flex-end;
            margin-bottom: 12px;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            display: flex;
            &:last-child {
                margin-bottom: 0;
            }
            &::before {
                background-color: rgba(0, 0, 0, 0.5);
                position: absolute;
                display: block;
                height: 100%;
                content: '';
                width: 100%;
                left: 0;
                top: 0;
            }
            .bottom-content {
                position: relative;
                color: #fff;
                padding: 24px;
                z-index: 2;
            }
        }
    }
}
</style>