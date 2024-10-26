<template>
    <nav class="theme-pagination">
        <ul>
            <li>
                <button type="button" class="not-exists">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 11L1.5 6L6.5 1" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </li>
            <li><button class="active" type="button">1</button></li>
            <li><button type="button">2</button></li>
            <li><button type="button">3</button></li>
            <li><button type="button">4</button></li>
            <li>...</li>
            <li><button type="button">20</button></li>
            <li>
                <button type="button">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1L6.5 6L1.5 11" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
.theme-pagination {
    justify-content: center;
    margin-top: 24px;
    display: flex;
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            align-items: center;
            display: flex;
            button {
                font-family: var(--theme-font);
                background-color: transparent;
                padding: 12px 24px;
                font-size: 16px;
                line-height: 1;
                border: none;
                &:hover {
                    cursor: pointer;
                    color: #0583F2;
                    svg {
                        path {
                            stroke: #0583F2;
                        }
                    }
                }
                &.active {
                    color: #2525255b;
                }
                &.not-exists {
                    pointer-events: none;
                    svg {
                        path {
                            stroke: #2525255b;
                        }
                    }
                }
                svg {
                    line-height: 0;
                }
            }
        }
    }
}
</style>