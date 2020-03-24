import React from 'react';

import './index.scss';

const Sales = props => {
    return (  
        <section className="sales-section">
            <h2 className="section__title" data-scrolly-down="fadeInDownBig">
            Скидки и акции!
            </h2>
            <div className="sales-section__wrapper">
                {props.sales.map(item => (
                    <div className="wrapper__container" key = {item.id}>
                        <h3 className="container__title" data-scrolly-down="fadeIn">{item.title}</h3>
                        <p className="container__text" data-scrolly-down="fadeIn">{item.text}</p>
                    </div>
                ))}
            </div>
      </section>
    );
}
 
export default Sales;
