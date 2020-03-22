import React from 'react';

import './index.scss';

import classnames from 'classnames';

const Header = props => {
    const isMenuOpened = props.isMenuOpened;

    return (
        <header className="header">
        <div className="header-top clearfix">
          <a href="#firstSection"><img src={props.logo} alt="Частный кинотеатр" className="logo" /></a>
          <button className= {classnames("l-right", "toggle-menu", isMenuOpened ? 'open-menu' : '')} href="#" onClick = {props.toggleMenu}>
            <i></i>
            <i></i>
            <i></i>
          </button>
        </div>

        <div className={classnames("header__menu", isMenuOpened ? 'visible' : 'hide')}>
          <ul className="menu__list" id = "menu">
            <li className="list__item animated"><a href="#main" className="item__link menu__link">Главная</a></li>
            <li className="list__item animated"><a href="#rooms" className="item__link menu__link">Кинозалы</a></li>
            <li className="list__item animated"><a href="#dating" className="item__link menu__link">Свидание</a></li>
            <li className="list__item animated"><a href="#caraoke" className="item__link menu__link">Караоке</a></li>
            <li className="list__item animated"><a href="#price" className="item__link menu__link">Цены</a></li>
            <li className="list__item animated"><a href="#contacts" className="item__link menu__link">Контакты</a></li>
          </ul>
        </div>
      </header>
    )
}
 
export default Header;