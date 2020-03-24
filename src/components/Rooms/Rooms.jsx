import React, {useEffect, useState} from 'react';
import Swiper from 'swiper';
import classnames from 'classnames';

import './index.scss';
import 'swiper/swiper.scss';

import abs1 from './assets/abs_1.jpg';
import abs2 from './assets/abs_2.jpg';
import abs3 from './assets/abs_3.jpg';
import abs4 from './assets/abs_4.jpg';
import abs5 from './assets/abs_5.jpg';

import gav1 from './assets/gav_1.png';
import gav2 from './assets/gav_2.png';
import gav3 from './assets/gav-3.png';
import gav4 from './assets/gav-4.png';
import gav5 from './assets/gav-5.png';

const Rooms = props => {
    const totalSlide = 2;

    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
        
            // Pagination
            pagination: {
                el : '.swiper-pagination'
            },
          });
    }, [])

    return (  
        <section className="section second-section">
          <a id="rooms"></a>
          <h2 className="section__title" data-scrolly-down="fadeInDownBig">Наши кинозалы</h2>
          <p className="section__phrase" data-scrolly-down="fadeIn">Наш кинотеатр готов порадовать вас двумя замечательными кинозалами</p>
          <p className="next arrow" onClick = {() => setCurrentSlide(currentSlide + 1)}></p>
          <p className="prev arrow" onClick = {() => setCurrentSlide(currentSlide + 1)}></p>
          <div className="slider" data-scrolly-down="fadeIn">
            <div className={classnames("slide", (currentSlide + 1) % totalSlide === 0 ? "showing" : "")}>
              <div className="slide__wrapper">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <img className="swiper-slide" src={abs1} alt="Кинотеатр Чита" />
                    <img className="swiper-slide" src={abs2} alt="Частный кинотеатр" />
                    <img className="swiper-slide" src={abs3} alt="Кинотеатр Чита" />
                    <img className="swiper-slide" src={abs4} alt="Кинотеатр Чита" />
                    <img className="swiper-slide" src={abs5} alt="Кинотеатр Чита" />
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
                <div className="slide__information">
                  <h3 className="information__title">Абстракция</h3>
                  <p className="information__phrase">
                    «Лучшее место, чтобы насладиться кино вдвоём...»
                  </p>
                  <p className="information__list-title">
                    Преимущества зала
                  </p>
                  <ul className="information__list">
                    <li className="list__item">
                      <p className="item__positon">Караоке</p>
                    </li>
                    <li className="list__item">
                      <p className="item__positon">Для празднования небольшой компанией</p>
                    </li>
                    <li className="list__item">
                      <p className="item__positon">Уютный дизайн</p>
                    </li>
                    <li className="list__item">
                      <p className="item__positon">Вместимость зала до 8 человек</p>
                    </li>
                    <li className="list__item">
                      <p className="item__positon">Идеально для романтического свидания</p>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            <div className={classnames("slide", (currentSlide + 1) % totalSlide === 1 ? "showing" : "")}>
              <div className="slide__wrapper">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <img className="swiper-slide" src={gav1} alt="Кинотеатр Чита"/>
                    <img className="swiper-slide" src={gav2} alt="Частный кинотеатр" />
                    <img className="swiper-slide" src={gav3} alt="Кинотеатр Чита" />
                    <img className="swiper-slide" src={gav4} alt="Кинотеатр Чита" />
                    <img className="swiper-slide" src={gav5} alt="Кинотеатр Чита" />
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
                <div className="slide__information">
                  <h3 className="information__title">Гавань</h3>
                  <p className="information__phrase">
                    «Мало мест в Чите, где можно сочетать отдых, трапезу и романтику...»
                  </p>
                  <p className="information__list-title">
                    Преимущества зала
                  </p>
                  <ul className="information__list">
                    <li className="list__item">
                      <p className="item__positon">Большой изогнутый экран</p>
                    </li>
                    <li className="list__item">
                      <p className="item__positon">Огромный мягкий диван</p>
                    </li>
                    <li className="list__item">
                      <p className="item__positon">Уютный дизайн</p>
                    </li>
                    <li className="list__item">
                      <p className="item__positon">Вместимость зала 12-15 человек</p>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
        </section>
    );
}
 
export default Rooms;