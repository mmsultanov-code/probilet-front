<template>
    <main-content-layout>
        <div class="contact-page-container">
            <div class="contact-information">
                <h1>Есть вопросы?</h1>
                <p>Вы можете оставить заявку, либо обратиться на прямую и наши специалисты ответят на все интересующие вас вопросы!</p>
                <div class="spacer xs"></div>
                <div class="flex-side list top">
                    <div class="contact-info">
                        <h2>Наш номер телефона</h2>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#0583F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.872 6.326c1.2.201 2.29.768 3.16 1.636a5.82 5.82 0 0 1 1.639 3.154M13.055 2.4a10.4 10.4 0 0 1 5.628 2.911 10.35 10.35 0 0 1 2.917 5.617m-1.667 8.474s-1.158 1.138-1.442 1.471c-.463.494-1.008.727-1.722.727-.069 0-.142 0-.21-.005-1.361-.086-2.625-.616-3.573-1.069a20.3 20.3 0 0 1-6.76-5.283c-1.561-1.879-2.606-3.616-3.297-5.48-.426-1.138-.582-2.025-.513-2.861.046-.535.252-.978.632-1.358L4.61 3.986c.224-.21.462-.325.696-.325.288 0 .522.174.668.32l.014.014c.28.26.545.53.825.818q.213.219.435.443l1.25 1.248c.485.485.485.933 0 1.417-.133.133-.261.265-.394.393-.385.393-.083.092-.48.448-.01.01-.02.014-.024.023-.394.393-.32.777-.238 1.037l.014.041c.325.787.783 1.527 1.479 2.409l.005.005c1.264 1.554 2.596 2.765 4.066 3.692.188.12.38.215.564.307.165.082.32.16.453.242.018.009.037.023.055.032a1 1 0 0 0 .453.114c.38 0 .619-.238.697-.315l.897-.896c.156-.155.403-.343.692-.343.284 0 .517.178.66.334l.008.009 2.524 2.518c.472.466.004 1.43.004 1.43"></path></svg>
                            <a href="tel:+998555131111">+998 55 513 11 11</a>
                        </p>
                    </div>
                    <div class="contact-info">
                        <h2>Наш Email</h2>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#0583F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.872 6.326c1.2.201 2.29.768 3.16 1.636a5.82 5.82 0 0 1 1.639 3.154M13.055 2.4a10.4 10.4 0 0 1 5.628 2.911 10.35 10.35 0 0 1 2.917 5.617m-1.667 8.474s-1.158 1.138-1.442 1.471c-.463.494-1.008.727-1.722.727-.069 0-.142 0-.21-.005-1.361-.086-2.625-.616-3.573-1.069a20.3 20.3 0 0 1-6.76-5.283c-1.561-1.879-2.606-3.616-3.297-5.48-.426-1.138-.582-2.025-.513-2.861.046-.535.252-.978.632-1.358L4.61 3.986c.224-.21.462-.325.696-.325.288 0 .522.174.668.32l.014.014c.28.26.545.53.825.818q.213.219.435.443l1.25 1.248c.485.485.485.933 0 1.417-.133.133-.261.265-.394.393-.385.393-.083.092-.48.448-.01.01-.02.014-.024.023-.394.393-.32.777-.238 1.037l.014.041c.325.787.783 1.527 1.479 2.409l.005.005c1.264 1.554 2.596 2.765 4.066 3.692.188.12.38.215.564.307.165.082.32.16.453.242.018.009.037.023.055.032a1 1 0 0 0 .453.114c.38 0 .619-.238.697-.315l.897-.896c.156-.155.403-.343.692-.343.284 0 .517.178.66.334l.008.009 2.524 2.518c.472.466.004 1.43.004 1.43"></path></svg>
                            <a href="mailto:info@probilet.uz">info@probilet.uz</a>
                        </p>
                    </div>
                </div>
                <div class="spacer"></div>
                <h2>Адрес головного офиса</h2>
                <p><strong>г. Ташкент, Мирабадский район, Айбек 59.</strong></p>
                <div class="map-side">
                    <div class="map-plug" style="height: 200px;"></div>
                </div>
            </div>
            <div class="contact-form">
                <h2>Оставьте заявку</h2>
                <div class="form-group">
                    <label for="your-name">Ваше имя</label>
                    <input type="text" id="your-name" name="your-name" placeholder="Ваше имя" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="your-phone">Ваш телефон</label>
                    <input type="tel" id="your-phone" name="your-phone" placeholder="Ваш телефон" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="your-comment">Ваш комментарий</label>
                    <textarea rows="3" id="your-comment" name="your-comment" placeholder="Ваш комментарий" class="form-control"></textarea>
                </div>
                <button class="theme-button red" type="button">Оставить заявку</button>
            </div>
        </div>
    </main-content-layout>
</template>
<style lang="scss" scoped>
.contact-page-container {
    align-items: stretch;
    display: flex;
    width: 100%;
    & > * {
        margin-right: 24px;
        &:last-child {
            margin-right: 0;
        }
    }
    .contact-information {
        background-color: #fff;
        border-radius: 12px;
        max-width: 565px;
        padding: 24px;
        width: 100%;
        p {
            margin: 0 0 0;
        }
        h1 {
            margin: 0 0 12px;
            line-height: 1;
        }
        h2 {
            font-weight: 400;
            font-size: 16px;
            margin: 0 0 0;
        }
        .contact-info {
            p {
                align-items: center;
                margin: 6px 0 0;
                display: flex;
                & > * {
                    margin-right: 8px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
                a {
                    color: var(--text-color);
                    text-decoration: none;
                    font-weight: 600;
                    &:hover {
                        color: var(--theme-color);
                    }
                }
            }
        }
        .map-side {
            margin: 24px 0 0;
            .map-plug {
                background-color: #E5E5E5;
                border-radius: 12px;
                width: 100%;
            }
        }
    }
    .contact-form {
        background-color: #fff;
        border-radius: 12px;
        max-width: 325px;
        padding: 24px;
        width: 100%;
        h2 {
            margin: 0 0 24px;
            line-height: 1;
        }
        .theme-button {
            border-radius: 12px;
            padding: 18px 12px;
            font-weight: 500;
            width: 100%;
        }
        .form-group {
            margin-bottom: 24px;
            label {
                color: var(--text-color);
                line-height: 1.2;
                margin: 0 0 12px;
                font-size: 16px;
                display: block;
            }
            .form-control {
                border: 1px solid #E6EAF0;
                background-color: #fff;
                border-radius: 12px;
                padding: 14px 16px;
                line-height: 21px;
                font-size: 16px;
                resize: none;
                width: 100%;
                &:active,
                &:focus {
                    border-color: var(--theme-color);
                    outline: 0px !important;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>