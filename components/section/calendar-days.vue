<template>
    <section class="section-concert-by-dates">
        <div class="container">
            <div class="section-title">
                <h2>Концерты по датам</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque sint impedit quia? Ducimus veniam nam unde sequi exercitationem placeat quae ratione saepe modi officia libero dignissimos, temporibus facilis sunt?</p>
            </div>
            <client-only>
                <div class="slider-container">
                    <button type="button" class="swiper-button-prev"></button>
                    <Swiper v-bind="swiper_options">
                        <SwiperSlide
                            v-for="(item, index) in calendar_days"
                            :key="`calendar-day-${index}`"
                            tag="button"
                            class="calendar-day"
                            :class="{ active: is_day_off(item.week_day) }"
                        >
                            <strong className="day">{{ item.day }}</strong>
                            <span className="week-day">{{ get_week_day_from_number(item.week_day) }}</span>
                        </SwiperSlide>
                    </Swiper>
                    <button type="button" class="swiper-button-next"></button>
                </div>
            </client-only>
        </div>
    </section>
</template>
<script setup>
const swiper_options = ref({
    loop: false,
    spaceBetween: 12,
    slidesPerView: 18,
    effect: 'fade',
    modules: [SwiperNavigation, SwiperFreeMode],
    freeMode: true,
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: { clickable: true },
    autoplay: { delay: 3000 }
})

const get_week_day_from_number = (number) => {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    return days[number]
}

const is_day_off = (week_day) => {
    return week_day === 0 || week_day === 6
}

const calendar_days = computed(() => {
    let days = []
    for (let i = 0; i < 30; i++) {
        let date = new Date()
        date.setDate(date.getDate() + i)
        days.push({
            day: date.getDate(),
            week_day: date.getDay()
        })
    }
    return days
})
</script>
<style lang="scss">
@use 'sass:color';
.section-concert-by-dates {
    position: relative;
    margin-top: 24px;
    .slider-container {
        position: relative;
        padding-inline: 60px;
    }
    .swiper-button-prev {
        left: 0px;
    }
    .swiper-button-next {
        right: 0px;
    }
    .swiper-button-next,
    .swiper-button-prev {
        background-color: #fff;
        background-image: none;
        border-radius: 12px;
        padding: 12px 22px;
        border: none;
        height: 74px;
        top: 22px;
        &::after {
            color: var(--text-color);
            font-size: 24px;
        }
    }
    .calendar-day {
        background-color: #fff;
        color: var(--text-color);
        flex-direction: column;
        text-decoration: none;
        align-items: center;
        border-radius: 12px;
        padding: 18px;
        display: flex;
        border: none;
        .day {
            font-size: 20px;
        }
        &.active {
            background-color: color.adjust(#dd3333, $lightness: 40%);
            color: var(--theme-color);
        }
        &:hover {
            cursor: pointer;
        }
    }
}
</style>
