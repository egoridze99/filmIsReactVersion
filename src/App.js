import React from 'react';

import Preloader from './components/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer';
import Hero from './components/Hero/Hero';

import './index.scss';


function App(props) {

  const {isLoaded} = props;

  const content = <>
    <HeaderContainer />
    <div className="wrapper">
      <Hero />
    </div>
  </>

  return (
    <>
      {!isLoaded ? <Preloader></Preloader> : content}
    </>
  );
}

export default App;
