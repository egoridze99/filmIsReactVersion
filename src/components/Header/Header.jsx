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

        {/* <!-- МОДАЛЬНАЯ ЗОНА --> */}
        <div className="modal animated modal-hide">
            <div className="modal__window animated">
              <button href="#" className="window__close" onClick = {props.closeWindow}></button>
              <p className="window__title">Забронировать зал</p>
              <form action="/dist/php/mail.php" method="POST" id="form" className="window__form">
                <input className="window__input" type="text" placeholder="Имя" id="name_input"/>
                <input className="window__input" type="tel" name="telefone" id="tel_input" placeholder="Номер телефона" />
                <input className="window__input-submit" type="submit" />
              </form>
            </div>
        </div>
        {/* <!-- ЗАКОНЧИЛАСЬ МОДАЛЬНАЯ ЗОНА --> */}
      </header>
    )
}
 
export default Header;