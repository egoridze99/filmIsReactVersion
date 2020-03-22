import React from 'react';

import Preloader from './components/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer';
import HeroContainer from './components/Hero/HeroContainer';
import ModalContainer from './components/Modal/ModalContainer';

import './index.scss';


function App(props) {

  const {isLoaded} = props;

  const content = <>
    <HeaderContainer />
    <ModalContainer />
    <div className="wrapper">
      <HeroContainer />
    </div>
  </>

  return (
    <>
      {!isLoaded ? <Preloader></Preloader> : content}
    </>
  );
}

export default App;
