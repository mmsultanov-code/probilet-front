// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: false,
    devtools: { enabled: false },
    css: ['./assets/scss/theme-style.scss'],
    app: {
        head: {
            meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }]
        }
    },
    plugins: [{ src: './plugins/maps.js', mode: 'client' }],
    modules: ['nuxt-swiper', '@nuxtjs/i18n'],
    i18n: {
        strategy: 'prefix',
        defaultLocale: 'ru',
        locales: [
            {
                code: 'ru',
                file: 'ru.ts',
                name: 'РУС'
            },
            {
                code: 'uz',
                file: 'uz.ts',
                name: 'OʼZB'
            },
            {
                code: 'en',
                file: 'en.ts',
                name: 'ENG'
            }
        ],
        langDir: 'lang'
    }
})
