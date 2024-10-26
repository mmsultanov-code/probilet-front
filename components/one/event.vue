<template>
    <nuxt-link :to="link" class="one-event-box" :style="`background-image: url('${image}')`">
        <span class="content-inside">
            <span class="bottom-content">
                <nav class="tag-list" v-if="tag_list.length">
                    <ul>
                        <li v-for="(item, tag_index) in tag_list" :key="`tag-index-${tag_index}`"><span>{{ item }}</span></li>
                    </ul>
                </nav>
                <strong class="title" v-if="title">{{ title }}</strong>
                <p v-if="place">{{ place }}</p>
                <small v-if="date">{{ date }}</small>
            </span>
            <span class="popup-content">
                <strong class="title" v-if="title">{{ title }}</strong>
                <small v-if="excerpt">{{ excerpt }}</small>
                <span class="date-data" v-if="date">
                    <small>{{ date }}</small>
                </span>
                <span class="read-more">Подробнее</span>
            </span>
        </span>
    </nuxt-link>
</template>
<script>
export default {
    props: {
        tag_list: { type: Array, default: () => [] },
        title: { type: String, default: '' },
        excerpt: { type: String, default: '' },
        place: { type: String, default: '' },
        date: { type: String, default: '' },
        image: { type: String, default: '' },
        link: { type: String, default: '' }
    }
}
</script>
<style lang="scss" scoped>
.one-event-box {
    background-position: center top;
    background-size: cover;
    text-decoration: none;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    display: block;
    color: #fff;
    width: 100%;
    .content-inside {
        align-items: flex-end;
        display: flex;
        height: 357px;
        padding: 14px;
    }
    &::after {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 12px;
        position: absolute;
        display: block;
        height: 100%;
        content: '';
        width: 100%;
        left: 0;
        top: 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
    }
    .popup-content {
        display: none;
    }
    .bottom-content {
        position: relative;
        z-index: 1;
        .tag-list {
            margin-bottom: 12px;
            ul {
                list-style: none;
                line-height: 1;
                padding: 0;
                margin: 0;
                li {
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 6px;
                    span {
                        background-color: rgba(255,255,255,0.4);
                        text-decoration: none;
                        border-radius: 12px;
                        padding: 5px 10px;
                        font-size: 12px;
                        display: block;
                        color: #fff;
                    }
                }
            }
        }
        .title {
            font-weight: 600;
            margin: 0 0 6px;
            font-size: 16px;
            display: block;
        }
        small,
        p {
            font-weight: 400;
            font-size: 14px;
            color: #fff;
            margin: 0;
        }
    }
    .popup-content {
        transition: 0.3s ease-in-out;
        background-color: #fff;
        color: var(--text-color);
        border-radius: 10px;
        position: absolute;
        display: block;
        padding: 14px;
        bottom: -160px;
        width: 100%;
        z-index: 3;
        left: 0;
        .tag-list {
            margin-bottom: 12px;
            ul {
                list-style: none;
                line-height: 1;
                padding: 0;
                margin: 0;
                li {
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 6px;
                    span {
                        background-color: rgba(255,255,255,0.4);
                        text-decoration: none;
                        border-radius: 12px;
                        padding: 5px 10px;
                        font-size: 12px;
                        display: block;
                        color: #fff;
                    }
                }
            }
        }
        .title {
            font-weight: 600;
            margin: 0 0 6px;
            font-size: 16px;
            display: block;
        }
        small,
        p {
            font-weight: 400;
            font-size: 14px;
            margin: 0;
        }
        .read-more {
            border-radius: 6px;
            text-align: center;
            margin-top: 12px;
            display: block;
            padding: 12px;
            border: none;
            width: 100%;
            background-color: var(--theme-color);
            color: #fff;
            &:hover {
                cursor: pointer;
            }
            &:active,
            &:focus {
                outline: 0px !important;
            }
        }
    }
    &:hover {
        .popup-content {
            bottom: 0;
        }
    }
}
</style>