import React from "react";

import './index.scss';

const Hero = props => {
    return (
        <section className="section hero attachment">
            <div className="hero__content">
                <h1 className="content__main-title animated fadeIn">
                    Частный кинотеатр
                </h1>
                <h2 className="content__title animated fadeIn">Film is...</h2>
                <button
                    href="#"
                    className="content__button animated fadeIn"
                    id="order"
                >
                    Забронировать зал
                </button>
            </div>
            <div className="overflow"></div>
        </section>
    );
};

export default Hero;
