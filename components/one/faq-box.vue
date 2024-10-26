<template>
    <div class="one-faq-box" :class="{'active': is_actived}">
        <button type="button" class="title" @click="collapse_box()">
            <span>{{ title }}</span>
            <svg v-if="!is_actived" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#0A090B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 5 4.58L17 10"></path></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#0A090B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l-5-4.58L7 14"></path></svg>
        </button>
        <div class="collapse-box" v-if="is_actived">
            <p>{{ description }}</p>
        </div>
    </div>
</template>
<script setup>
const is_actived = ref(false);
const collapse_box = () => {
    is_actived.value = !is_actived.value;
}
const props = defineProps({
    title: String,
    description: String
})
</script>
<style lang="scss" scoped>
.one-faq-box {
    border: 1px solid #efefef;
    margin-bottom: 12px;
    border-radius: 12px;
    padding: 12px 24px;
    width: 100%;
    &.active {
        border-color: #0583F2;
        .title {
            color: #0583F2;
            svg {
                path {
                    stroke: #0583F2;
                }
            }
        }
    }
    .title {
        font-family: var(--theme-font);
        justify-content: space-between;
        background-color: transparent;
        color: var(--text-color);
        align-items: center;
        line-height: 1.3;
        font-weight: 600;
        text-align: left;
        font-size: 16px;
        display: flex;
        margin: 0 0 0;
        border: none;
        width: 100%;
        &:hover {
            cursor: pointer;
        }
    }
    .collapse-box {
        margin-top: 12px;
        p {
            color: var(--text-color);
            line-height: 1.5;
            font-size: 14px;
            margin: 0;
        }
    }
}
</style>