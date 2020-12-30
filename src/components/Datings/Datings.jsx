import React, { useEffect } from 'react';
import simpleParallax from 'simple-parallax-js';

import './index.scss'

import dating1 from './assets/dating_1.jpg';
import dating2 from './assets/dating_2.jpg';
import dating3 from './assets/dating_3.jpg';
import dating4 from './assets/dating_4.jpg';
import dating5 from './assets/dating_5.jpg';

const Datings = props => {
    useEffect(() => {
      const images = document.querySelectorAll('.parallax-dating');

      new simpleParallax(images, {
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)'
    });
    }, []);

    return (  
        <section className="section third-section">
          <a name="dating"></a>
          <h2 className="section__title" data-scrolly-down="fadeInDownBig">Свидания</h2>
          <p className="section__phrase" data-scrolly-down="fadeIn">Наш кинотеатр предоставляет различные пакеты свиданий</p>
          <div className="dating">
            <div className="dating__block" data-scrolly-down="fadeIn">
              <div className="block__img">
                <img className="parallax-dating" src={dating1} alt="" />
              </div>
              <div className="block__info">
                <h3 className="info__title">
                  Свидание «Лайт»
                </h3>
                <ul className="info__list">
                  <li className="info-list__item">
                    <p className="item__par">Украшение зала свечами и лепестками роз</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Аренда зала 2 часа</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Фильм на выбор</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par"><span className="item__sum">Цена: </span>1500&#8381;</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dating__block" data-scrolly-down="fadeIn">
              <div className="block__img">
                <img className="parallax-dating" src={dating2} alt="" />
              </div>
              <div className="block__info">
                <h3 className="info__title">
                  Свидание «Стандарт»
                </h3>
                <ul className="info__list">
                  <li className="info-list__item">
                    <p className="item__par">Украшение зала свечами и лепестками роз</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Фруктовая тарелка</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Аренда зала 2 часа</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Шампанское/Вино/Сок (На выбор)</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Фильм на выбор</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par"><span className="item__sum">Цена: </span>2300&#8381;</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dating__block" data-scrolly-down="fadeIn">
              <div className="block__img">
                <img className="parallax-dating" src={dating3} alt="" />
              </div>
              <div className="block__info">
                <h3 className="info__title">
                  Свидание «Стандарт+»
                </h3>
                <ul className="info__list">
                  <li className="info-list__item">
                    <p className="item__par">Украшение зала свечами и лепестками роз</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Шоколадное фондю (подается с фруктовой тарелкой)</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Аренда зала 3 часа</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Шампанское/Вино/Сок (На выбор)</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Фильм на выбор</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par"><span className="item__sum">Цена: </span>3000&#8381;</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dating__block" data-scrolly-down="fadeIn">
              <div className="block__img">
                <img className="parallax-dating" src={dating4} alt="" />
              </div>
              <div className="block__info">
                <h3 className="info__title">
                  Свидание «VIP»
                </h3>
                <ul className="info__list">
                  <li className="info-list__item">
                    <p className="item__par">Украшение зала свечами и лепестками роз</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Фруктовая тарелка</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Candy Bar</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Аренда зала 3 часа</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Шампанское/Вино/Сок (На выбор)</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Фильм на выбор</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par"><span className="item__sum">Цена: </span>3300&#8381;</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dating__block" data-scrolly-down="fadeIn">
              <div className="block__img">
                <img className="parallax-dating" src={dating5} alt="" />
              </div>
              <div className="block__info">
                <h3 className="info__title">
                  Свидание «Premium»
                </h3>
                <ul className="info__list">
                  <li className="info-list__item">
                    <p className="item__par">Украшение зала свечами и лепестками роз</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Фруктовая тарелка</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Сет роллов на двоих</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Украшение зала воздушными шарами</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Шампанское/Вино/Сок (На выбор)</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Аренда зала 3 часа</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par">Фильм на выбор</p>
                  </li>
                  <li className="info-list__item">
                    <p className="item__par"><span className="item__sum">Цена: </span>5800/6150&#8381;</p>
                  </li>
                </ul>
              </div>
            </div>
            </div>
        </section>
    );
}
 
export default Datings;