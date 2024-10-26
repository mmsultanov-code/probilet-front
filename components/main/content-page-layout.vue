<template>
    <main class="main-content-layout" id="main-content-layout">
        <div class="top-side">
            <main-header />
            <main-navbar />
        </div>
        <div class="layout-content-side">
            <div class="spacer"></div>
            <div class="container">
                <slot></slot>
            </div>
        </div>
        <div class="bottom-side">
            <main-footer />
        </div>
    </main>
</template>
<style lang="scss" scoped>
.main-content-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .top-side {
        flex: 0 0 auto;
    }
    .layout-content-side {
        flex: 1 0 auto;
    }
    .bottom-side {
        flex: 0 0 auto;
    }
}
</style>