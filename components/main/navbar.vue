<template>
    <div class="container">
        <div class="main-navigation-bar">
            <nav class="main-navigation">
                <ul>
                    <li>
                        <a href="#">Концерты</a>
                    </li>
                    <li>
                        <a href="#">Выставки</a>
                    </li>
                    <li>
                        <a href="#">Театр</a>
                    </li>
                    <li>
                        <a href="#">Музеи</a>
                    </li>
                    <li>
                        <a href="#">Фестивали</a>
                    </li>
                    <li>
                        <a href="#">Спорт</a>
                    </li>
                </ul>
            </nav>
            <div class="search-bar">
                <input class="form-control" aria-placeholder="Поиск" />
                <button type="button" class="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path
                            stroke="#0583F2"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M16.927 17.04 20.4 20.4m-9-13.2a3.6 3.6 0 0 1 3.6 3.6m4.28.64a7.84 7.84 0 1 1-15.68 0 7.84 7.84 0 0 1 15.68 0Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.main-navigation-bar {
    justify-content: space-between;
    background-color: #fff;
    border-radius: 12px;
    align-items: center;
    margin-top: 24px;
    padding: 12px;
    display: flex;
    .main-navigation {
        ul {
            list-style: none;
            line-height: 1;
            padding: 0;
            margin: 0;
            li {
                display: inline-block;
                vertical-align: top;
                margin-right: 12px;
                a {
                    background-color: #f1f2f5;
                    color: var(--text-color);
                    text-decoration: none;
                    border-radius: 6px;
                    padding: 12px 24px;
                    font-weight: 500;
                    display: block;
                    &:hover {
                        background-color: var(--theme-color);
                        color: #fff;
                    }
                }
            }
        }
    }
    .search-bar {
        align-items: center;
        position: relative;
        max-width: 300px;
        display: flex;
        width: 100%;
        .input-icon {
            background-color: transparent;
            border: none;
            padding: 0;
            &:hover {
                cursor: pointer;
            }
        }
        input {
            border: 1px solid #f1f2f5;
            padding: 12px 12px 12px 40px;
            border-radius: 6px;
            font-size: 14px;
            width: 100%;
            &:active,
            &:focus {
                border-color: var(--theme-color);
                outline: 0px !important;
                box-shadow: none;
                & + .input-icon {
                    svg {
                        path {
                            stroke: var(--theme-color);
                        }
                    }
                }
            }
        }
        svg {
            transform: translateY(-50%);
            position: absolute;
            left: 12px;
            top: 50%;
        }
    }
}
</style>