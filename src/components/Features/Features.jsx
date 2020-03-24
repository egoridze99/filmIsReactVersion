import React from 'react';

import './index.scss'

const Features = () => {
    return (  
        <section className="fourth-section section">
          <h2 className="section__title" data-scrolly-down="fadeInDownBig">
            Наши преимущества
          </h2>
          <div className="fourth-section__lists-wrapper">
            <ul className="fourth-section__list" data-scrolly-down="jackInTheBox">
              <li className="list__item">
                <p className="item__par">
                  Просмотр фильма только в своей компании
                </p>
              </li>
              <li className="list__item">
                <p className="item__par">
                  Мягкие и удобные диваны
                </p>
              </li>
              <li className="list__item">
                <p className="item__par">
                  Большой экран и качественный звук
                </p>
              </li>
            </ul>
            <ul className="fourth-section__list" data-scrolly-down="jackInTheBox">
              <li className="list__item">
                <p className="item__par">
                  Еду и напитки можно приносить с собой
                </p>
              </li>
              <li className="list__item">
                <p className="item__par">
                  Свободная аренда зала
                </p>
              </li>
              <li className="list__item">
                <p className="item__par">
                  Идельно для празднований
                </p>
              </li>
            </ul>
          </div>
        </section>
    );
}
 
export default Features;