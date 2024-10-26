<template>
    <main-content-layout>
        <div class="map-side">
            <client-only>
                <div class="map-navigation-container">
                    <mav class="map-navigation">
                        <ul>
                            <li>
                                <button type="button" :class="{'active': coordinates[0] === 41.291980}" @click="changeCoords([41.291980, 69.281605])">
                                    <strong>Probilet.uz Головной офис</strong>
                                    <small>улица Шарафа Рашидова, 16A</small>
                                    <strong class="date">улица Шарафа Рашидова, 16A</strong>
                                </button>
                            </li>
                            <li>
                                <button type="button" :class="{'active': coordinates[0] === 41.291037}" @click="changeCoords([41.291037, 69.276959])">
                                    <strong>Probilet.uz Головной офис</strong>
                                    <small>улица Шарафа Рашидова, 16A</small>
                                    <strong class="date">улица Шарафа Рашидова, 16A</strong>
                                </button>
                            </li>
                            <li>
                                <button type="button" :class="{'active': coordinates[0] === 41.279856}" @click="changeCoords([41.279856, 69.268502])">
                                    <strong>Probilet.uz Головной офис</strong>
                                    <small>улица Шарафа Рашидова, 16A</small>
                                    <strong class="date">улица Шарафа Рашидова, 16A</strong>
                                </button>
                            </li>
                            <li>
                                <button type="button" :class="{'active': coordinates[0] === 41.294290}" @click="changeCoords([41.294290, 69.278258])">
                                    <strong>Probilet.uz Головной офис</strong>
                                    <small>улица Шарафа Рашидова, 16A</small>
                                    <strong class="date">улица Шарафа Рашидова, 16A</strong>
                                </button>
                            </li>
                            <li>
                                <button type="button" :class="{'active': coordinates[0] === 41.287186}" @click="changeCoords([41.287186, 69.266850])">
                                    <strong>Probilet.uz Головной офис</strong>
                                    <small>улица Шарафа Рашидова, 16A</small>
                                    <strong class="date">улица Шарафа Рашидова, 16A</strong>
                                </button>
                            </li>
                            <li>
                                <button type="button" :class="{'active': coordinates[0] === 41.282292}" @click="changeCoords([41.282292, 69.266968])">
                                    <strong>Probilet.uz Головной офис</strong>
                                    <small>улица Шарафа Рашидова, 16A</small>
                                    <strong class="date">улица Шарафа Рашидова, 16A</strong>
                                </button>
                            </li>
                        </ul>
                    </mav>
                </div>
                <YandexMap :coordinates="coordinates" :detailed-controls="detailedControls" :controls="controls" :zoom="15">
                    <YandexMarker 
                        marker-type="placemark"
                        :markerId="1"
                        :coordinates="coordinates"
                        hint-content="Hint content 1"
                        :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                        :icon="{color: 'green', glyph: 'cinema'}"
                        cluster-name="1"
                    ></YandexMarker>
                </YandexMap>
            </client-only>
        </div>
    </main-content-layout>
</template>
<script setup>
import { yandexMap, yandexMarker } from 'vue-yandex-maps'
const coordinates = ref([41.291980, 69.281605])
const controls = ['fullscreenControl']
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } }
const changeCoords = (coords) => {
    coordinates.value = coords
}
</script>
<style lang="scss" scoped>
.yandex-container {
    max-width: calc(100% - 332px - 12px);
    border: 1px solid #e6eaf0;
    border-radius: 12px;
    margin-left: auto;
    overflow: hidden;
    height: 702px;
    width: 100%;
}
.map-side {
    position: relative;
    margin: 0 0 0;
    width: 100%;
    .map-plug {
        background-color: #e5e5e5;
        border-radius: 12px;
        width: 100%;
    }
    .map-navigation-container {
        padding-right: 24px;
        padding-right: 12px;
        position: absolute;
        overflow-y: auto;
        max-width: 332px;
        padding: 12px;
        height: 702px;
        width: 100%;
        z-index: 3;
        left: 0;
        top: 0;
        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #0583F2;
            border-radius: 12px;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
    }
    .map-navigation {
        border-radius: 0 12px 12px 0;
        background-color: #fff;
        position: absolute;
        padding: 12px;
        z-index: 3;
        left: 0;
        top: 0;
        ul {
            list-style: none;
            line-height: 1;
            padding: 0;
            margin: 0;
            li {
                border-bottom: 1px solid #efefef;
                padding-bottom: 12px;
                margin-bottom: 12px;
                display: block;
                &:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                    margin-bottom: 0;
                }
                button {
                    background-color: #fff;
                    border-radius: 12px;
                    text-align: left;
                    padding: 24px;
                    border: none;
                    width: 100%;
                    strong, small {
                        display: block;
                    }
                    strong {
                        color: var(--text-color);
                        line-height: 21px;
                        font-weight: 600;
                        margin: 0 0 12px;
                        font-size: 16px;
                    }
                    small {
                        margin: 0 0 12px;
                        font-size: 14px;
                        display: block;
                    }
                    .date {
                        margin: 0;
                    }
                    &.active {
                        background-color: #0583F2;
                        strong, small {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
</style>
