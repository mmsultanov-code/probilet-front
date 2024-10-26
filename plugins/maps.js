import { defineNuxtPlugin } from '#app'
import plugin from 'vue-yandex-maps'

const settings = {
    apiKey: '53ef36c9-7701-42f7-b5b1-3584bc9c82fd' // Индивидуальный ключ API
    // lang: 'ru_RU', // Используемый язык
    // coordorder: 'latlong', // Порядок задания географических координат
    // debug: false, // Режим отладки
    // version: '2.1' // Версия Я.Карт
}
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(plugin, settings)
})
