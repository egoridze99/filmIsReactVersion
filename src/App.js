import React, { useEffect } from "react";

import Preloader from "./components/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import HeroContainer from "./components/Hero/HeroContainer";
import ModalContainer from "./components/Modal/ModalContainer";
import Rooms from "./components/Rooms/Rooms";
import Prices from "./components/Prices/Prices";
import Datings from "./components/Datings/Datings";
import Features from "./components/Features/Features";
import Caraoke from "./components/Caraoke/Caraoke";
import SalesContainer from "./components/Sales/SalesContainer";
import Map from "./components/Map/Map";
import Media from "./components/Media/Media";
import Footer from "./components/Footer/Footer";

import "./index.scss";
import "animate.css/animate.css";
import useScrollAnimation from "./helpers/hooks/useScrollAnimation";
import useDisableAtachment from "./helpers/hooks/useDisableAtachment";

function App(props) {
    const { isLoaded } = props;

    useScrollAnimation();
    useDisableAtachment();

    const content = (
        <>
            <HeaderContainer />
            <ModalContainer />
            <div className='wrapper'>
                <a id='main'></a>
                <HeroContainer />
                {/* <Rooms /> */}
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
