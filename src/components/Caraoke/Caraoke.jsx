import React from 'react';
import { useEffect } from 'react';
import simpleParallax from 'simple-parallax-js';

import './index.scss'

import img from './assets/caraoke.JPG'

const Caraoke = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.caraoke-parallax');

        new simpleParallax(images, {
          delay: .6,
          transition: 'cubic-bezier(0,0,0,1)'
      });
    }, [])

    return (  
        <section className="fivth-section">
          <a name="caraoke"></a>
          <div className="fivth-section__wrapper">
            <div className="fivth-section__img-block">
              <img className="caraoke-parallax" src={img} alt="" />
            </div>
            <div className="fivth-section__text-block">
              <h3 className="text-block__title" data-scrolly-down="fadeInDownBig">
                У нас есть караоке!
              </h3>
              <p className="text-block__text" data-scrolly-down="fadeIn">
                В нашем кинотеатре предоставлена услуга караоке. Вы можете выбрать любую из 100 тысяч песен имеющихся в каталоге. 
              </p>
              <p className="text-block__text" data-scrolly-down="fadeIn">
                <span className="item__sum">Цена: </span>Аренда зала + 300 рублей (За компанию)
              </p>
            </div>
          </div>
        </section>
    );
}
 
export default Caraoke;