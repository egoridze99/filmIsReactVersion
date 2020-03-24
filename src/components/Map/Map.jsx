import React from 'react';

import './index.scss';

const Map = () => {
    return (  
    <section className="map-section">
        <div className="map-section__wrapper">
            <iframe className = "frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.0590859480076!2d113.49226321575799!3d52.06044777972971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5dca4a9fa729dc85%3A0xc81e497c5dbba868!2sFilm+Is!5e0!3m2!1sru!2sru!4v1564672889071!5m2!1sru!2sru"></iframe>
        </div>
      </section>
    );
}
 
export default Map;