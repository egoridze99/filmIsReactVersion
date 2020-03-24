import React from 'react';

import './index.scss';

const Prices = props => {
    return (  
        <section className="price-section">
          <a name="price"></a>
          <h2 className="section__title" data-scrolly-down="fadeInDownBig">
            Цена аренды зала 
          </h2>
          <div className="price-section__container" data-scrolly-down="fadeIn">
            <div className="price-section__top price-section__wrapper">
              <h3 className="price-section__title">
                С 12:00 до 18:00
              </h3>
              <div className="wrapper__container">
                <div className="container__solo">
                  <h3 className="container__title">
                    Для двоих
                  </h3>
                  <p className="container__price">
                    500&#8381;
                  </p>
                  <p className="container__info">
                    (За двоих)
                  </p>
                </div>
                <div className="container__company">
                  <h3 className="container__title">
                    Для компаний
                  </h3>
                  <p className="container__price">
                    200&#8381;
                  </p>
                  <p className="container__info">
                    (С человека)
                  </p>
                </div>
              </div>
            </div>
            <div className="price-section__bottom price-section__wrapper">
              <h3 className="price-section__title">
                С 18:00 до 04:00
              </h3>
              <div className="wrapper__container">
                <div className="container__solo">
                  <h3 className="container__title">
                    Для двоих
                  </h3>
                  <p className="container__price">
                    700&#8381;
                  </p>
                  <p className="container__info">
                    (За двоих)
                  </p>
                </div>
                <div className="container__company">
                  <h3 className="container__title">
                    Для компаний
                  </h3>
                  <p className="container__price">
                    250&#8381;
                  </p>
                  <p className="container__info">
                    (С человека)
                  </p>
                </div>
              </div>    
            </div>
          </div>
        </section>
    );
}
 
export default Prices;