<template>
    <aside class="navigation-sidebar">
        <div class="top-side">
            <nav class="navigation">
                <ul>
                    <li><nuxt-link :to="`/${$i18n.locale}/company/about-us`">О Нас</nuxt-link></li>
                    <li><nuxt-link :to="`/${$i18n.locale}/company/contacts`">Контакты</nuxt-link></li>
                    <li><nuxt-link :to="`/${$i18n.locale}/company/points-of-sale`">Точки продаж</nuxt-link></li>
                    <li><nuxt-link :to="`/${$i18n.locale}/company/for-partners`">Партнёрам</nuxt-link></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>
        </div>
        <div class="bottom-side">
            <nav class="navigation">
                <ul>
                    <li><button type="button" class="warning">Выйти</button></li>
                </ul>
            </nav>
        </div>
    </aside>
</template>
<style lang="scss" scoped>
.navigation-sidebar {
    justify-content: space-between;
    background-color: #fff;
    flex-direction: column;
    border-radius: 12px;
    min-height: 704px;
    max-width: 269px;
    display: flex;
    padding: 12px;
    width: 100%;
    .navigation {
        ul {
            list-style: none;
            line-height: 1;
            padding: 0;
            margin: 0;
            li {
                margin: 0 0 6px;
                display: block;
                &:last-child {
                    margin-bottom: 0;
                }
                button,
                a {
                    background-color: transparent;
                    color: var(--text-color);
                    text-decoration: none;
                    border-radius: 12px;
                    padding: 14px 16px;
                    line-height: 21px;
                    font-weight: 400;
                    text-align: left;
                    font-size: 16px;
                    display: block;
                    border: none;
                    width: 100%;
                    &.router-link-exact-active {
                        background-color: #0583F2;
                        color: #fff;
                    }
                    &.warning {
                        transition: background-color 0.3s ease-in-out;
                        background-color: #FF4E4E0D;
                        text-align: center;
                        color: #FF4E4E;
                        &:hover {
                            background-color: #ff4e4e2f;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>