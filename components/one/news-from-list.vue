<template>
    <nuxt-link :to="`/${$i18n.locale}/news/page-${link}`" class="one-news-from-list" v-if="component_is_active">
        <span class="thumbnail-side" v-if="thumbnail">
            <img :src="thumbnail" alt="thumbnail">
        </span>
        <span class="content-side">
            <span class="top-side">
                <h2>{{ title }}</h2>
                <p>{{ excerpt }}</p>
            </span>
            <span class="meta-side">
                <small class="datetime">{{ datetime }}</small>
                <small class="date">{{ date }}</small>
            </span>
        </span>
    </nuxt-link>
</template>
<script>
export default {
    name: 'OneNewsFromList',
    props: {
        thumbnail: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        excerpt: {
            type: String,
            default: ''
        },
        datetime: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        }
    },
    computed: {
        component_is_active: function() {
            if(this.title || this.excerpt || this.datetime || this.date) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.one-news-from-list {
    padding: 24px;
    background-color: #fff;
    align-items: stretch;
    border-radius: 12px;
    margin-bottom: 12px;
    display: flex;
    padding-right: 48px;
    text-decoration: none;
    color: var(--text-color);
    &:last-child {
        margin-bottom: 0;
    }
    .thumbnail-side {
        margin-right: 24px;
        min-width: 367px;
        line-height: 0;
        img {
            border-radius: 12px;
            max-height: 367px;
        }
    }
    .content-side {
        justify-content: space-between;
        font-family: var(--theme-font);
        flex-direction: column;
        display: flex;
        h2 {
            font-weight: 600;
            margin: 0 0 8px;
            font-size: 20px;
        }
        p {
            line-height: 1.5;
            font-size: 16px;
            margin: 0 0 0;
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
    &:hover {
        .content-side {
            h2, .title {
                color: #0583F2;
            }
            .meta-side {
                .datetime, .date {
                    color: #0583F2;
                }
            }
        }
    }
}
</style>