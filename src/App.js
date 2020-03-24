import React, { useEffect } from "react";

import Preloader from "./components/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import HeroContainer from "./components/Hero/HeroContainer";
import ModalContainer from "./components/Modal/ModalContainer";
import Rooms from './components/Rooms/Rooms';
import Prices from './components/Prices/Prices';
import Datings from './components/Datings/Datings';
import Features from './components/Features/Features';
import Caraoke from './components/Caraoke/Caraoke';
import SalesContainer from './components/Sales/SalesContainer';
import Map from './components/Map/Map';
import Media from './components/Media/Media';
import Footer from './components/Footer/Footer';

import "./index.scss";
import "animate.css/animate.css";

function scrollAnimation() {
  document.querySelectorAll('[data-scrolly-down]')
    .forEach(function(item) {
      const divPos = item.getBoundingClientRect().top;

      if (divPos < window.innerHeight - 100) {
        item.classList.add('animated');
        item.classList.add(item.dataset.scrollyDown);
      };
    })
}

function App(props) {
    const { isLoaded } = props;

    function IsIos() {
      const iDevices = [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
      ];
    
      if (!!navigator.platform) {
        while (iDevices.length) {
          if (navigator.platform === iDevices.pop()) {
            return true;
          }
        }
      }
    
      return false;
    };
    
    function disableAttachment() {
        if (IsIos()) {
            console.warn('IOS is detected');
    
            const ATTACHMENT = 'attachment';
    
            const attachment = document.querySelector(`.${ATTACHMENT}`);
            attachment.classList.remove(ATTACHMENT);
        } else
            console.info('No Ios detected. Attached running');
    }

    useEffect(() => {
      disableAttachment();

      window.addEventListener('scroll', scrollAnimation);

      return () => window.removeEventListener('scroll', scrollAnimation);
    }, []);

    const content = (
        <>
            <HeaderContainer />
            <ModalContainer />
            <div className="wrapper">
                <a id = "main"></a>
                <HeroContainer />
                <Rooms />
                <Prices />
                <Datings />
                <Features />
                <Caraoke />
                <SalesContainer />
                <Map />
                <Media />
                <Footer />
            </div>
        </>
    );

    return <>{!isLoaded ? <Preloader></Preloader> : content}</>;
}

export default App;
