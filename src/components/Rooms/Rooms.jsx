import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import classnames from "classnames";

import "./index.scss";
import "swiper/swiper.scss";

import abs1 from "./assets/abs_1.jpg";
import abs2 from "./assets/abs_2.jpg";
import abs3 from "./assets/abs_3.jpg";
import abs4 from "./assets/abs_4.jpg";

import gav1 from "./assets/gav_1.jpg";
import gav2 from "./assets/gav_2.jpg";
import gav3 from "./assets/gav_3.jpg";
import gav4 from "./assets/gav_4.jpg";

import eds1 from "./assets/eds_1.jpg";
import eds2 from "./assets/eds_2.JPG";
import eds3 from "./assets/eds_3.JPG";
import eds4 from "./assets/eds_4.JPG";

import tron1 from "./assets/tron_1.JPG";
import tron2 from "./assets/tron_2.JPG";
import tron3 from "./assets/tron_3.JPG";
import tron4 from "./assets/tron_4.JPG";
import tron5 from "./assets/tron_5.JPG";

import disc1 from "./assets/disc_1.JPG";
import disc2 from "./assets/disc_2.JPG";
import disc3 from "./assets/disc_3.JPG";
import disc4 from "./assets/disc_4.JPG";
import disc5 from "./assets/disc_5.JPG";

const Rooms = (props) => {
    const totalSlide = 5;

    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        new Swiper(".swiper-container", {
            // Optional parameters
            direction: "horizontal",
            loop: true,

            // Pagination
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }, []);

    return (
        <section className='section second-section'>
            <a id='rooms'></a>
            <h2 className='section__title' data-scrolly-down='fadeInDownBig'>
                Наши кинозалы
            </h2>
            <p className='section__phrase' data-scrolly-down='fadeIn'>
                Наш кинотеатр готов порадовать вас пятью замечательными
                кинозалами
            </p>
            <p
                className='next arrow'
                onClick={() => setCurrentSlide(currentSlide + 1)}
            ></p>
            <p
                className='prev arrow'
                onClick={() => {
                    setCurrentSlide(currentSlide - 1);
                    console.log(currentSlide);
                }}
            ></p>
            <div className='slider' data-scrolly-down='fadeIn'>
                <div
                    className={classnames(
                        "slide",
                        Math.abs(currentSlide - 1) % totalSlide === 0
                            ? "showing"
                            : ""
                    )}
                >
                    <div className='slide__wrapper'>
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                <img
                                    className='swiper-slide'
                                    src={abs1}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={abs2}
                                    alt='Частный кинотеатр'
                                />
                                <img
                                    className='swiper-slide'
                                    src={abs3}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={abs4}
                                    alt='Кинотеатр Чита'
                                />
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                        <div className='slide__information'>
                            <h3 className='information__title'>Абстракция</h3>
                            <p className='information__address'>Шилова 95Б</p>
                            <p className='information__phrase'>
                                «Лучшее место, чтобы насладиться кино вдвоём...»
                            </p>
                            <p className='information__list-title'>
                                Преимущества зала
                            </p>
                            <ul className='information__list'>
                                <li className='list__item'>
                                    <p className='item__positon'>Караоке</p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Для празднования небольшой компанией
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Уютный дизайн
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Вместимость зала до 8 человек
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Идеально для романтического свидания
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={classnames(
                        "slide",
                        Math.abs(currentSlide - 1) % totalSlide === 1
                            ? "showing"
                            : ""
                    )}
                >
                    <div className='slide__wrapper'>
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                <img
                                    className='swiper-slide'
                                    src={gav1}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={gav2}
                                    alt='Частный кинотеатр'
                                />
                                <img
                                    className='swiper-slide'
                                    src={gav3}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={gav4}
                                    alt='Кинотеатр Чита'
                                />
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                        <div className='slide__information'>
                            <h3 className='information__title'>Гавань</h3>
                            <p className='information__address'>Шилова 95Б</p>
                            <p className='information__phrase'>
                                «Мало мест в Чите, где можно сочетать отдых,
                                трапезу и романтику...»
                            </p>
                            <p className='information__list-title'>
                                Преимущества зала
                            </p>
                            <ul className='information__list'>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Большой изогнутый экран
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Огромный мягкий диван
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Уютный дизайн
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Вместимость зала 12-15 человек
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={classnames(
                        "slide",
                        Math.abs(currentSlide - 1) % totalSlide === 2
                            ? "showing"
                            : ""
                    )}
                >
                    <div className='slide__wrapper'>
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                <img
                                    className='swiper-slide'
                                    src={eds1}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={eds2}
                                    alt='Частный кинотеатр'
                                />
                                <img
                                    className='swiper-slide'
                                    src={eds3}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={eds4}
                                    alt='Кинотеатр Чита'
                                />
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                        <div className='slide__information'>
                            <h3 className='information__title'>Эдисон</h3>
                            <p className='information__address'>Шилова 95Б</p>
                            <p className='information__phrase'>
                                «Уютно, как дома»
                            </p>
                            <p className='information__list-title'>
                                Преимущества зала
                            </p>
                            <ul className='information__list'>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Изогнутый экран
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>Караоке</p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Лаконичный дизайн
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Вместимость зала 6-10 человек
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={classnames(
                        "slide",
                        Math.abs(currentSlide - 1) % totalSlide === 3
                            ? "showing"
                            : ""
                    )}
                >
                    <div className='slide__wrapper'>
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                <img
                                    className='swiper-slide'
                                    src={tron1}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={tron2}
                                    alt='Частный кинотеатр'
                                />
                                <img
                                    className='swiper-slide'
                                    src={tron3}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={tron4}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={tron5}
                                    alt='Кинотеатр Чита'
                                />
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                        <div className='slide__information'>
                            <h3 className='information__title'>ТРОН</h3>
                            <p className='information__address'>Шилова 95Б</p>
                            <p className='information__phrase'>
                                «Вы никогда не будете настолько взрослыми, чтобы
                                не играть в игры...»
                            </p>
                            <p className='information__list-title'>
                                Преимущества зала
                            </p>
                            <ul className='information__list'>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        PS5 и игры нового поколения
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Большой выбор настольных игр
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Зал идеально подойдёт для компании и для
                                        просмотра фильмов вдвоём
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Вместимость зала до 8 человек
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={classnames(
                        "slide",
                        Math.abs(currentSlide - 1) % totalSlide === 4
                            ? "showing"
                            : ""
                    )}
                >
                    <div className='slide__wrapper'>
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                <img
                                    className='swiper-slide'
                                    src={disc1}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={disc2}
                                    alt='Частный кинотеатр'
                                />
                                <img
                                    className='swiper-slide'
                                    src={disc3}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={disc4}
                                    alt='Кинотеатр Чита'
                                />
                                <img
                                    className='swiper-slide'
                                    src={disc5}
                                    alt='Кинотеатр Чита'
                                />
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                        <div className='slide__information'>
                            <h3 className='information__title'>Диско</h3>
                            <p className='information__address'>Ленина 37</p>
                            <p className='information__phrase'>
                                «Танцы, музыка и диско шар, пожалуй, лучшее
                                трио»
                            </p>
                            <p className='information__list-title'>
                                Преимущества зала
                            </p>
                            <ul className='information__list'>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Современная аппаратура, светомузыка и
                                        уникальный дизайн
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Идеален для больших компаний.
                                        Вместимость зала до 25 человек
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>
                                        Огромный кожаный диван
                                    </p>
                                </li>
                                <li className='list__item'>
                                    <p className='item__positon'>Караоке</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rooms;
