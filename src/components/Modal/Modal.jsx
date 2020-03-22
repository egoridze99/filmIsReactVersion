import React from 'react'

import './index.scss';

const Modal = props => {
    return (
        <div className="modal animated modal-hide">
            <div className="modal__window animated">
            <button href="#" className="window__close" onClick = {props.closeWindow}></button>
            <p className="window__title">Обратный звонок</p>
            <form action="/dist/php/mail.php" method="POST" id="form" className="window__form">
                <input className="window__input" type="text" placeholder="Имя" id="name_input"/>
                <input className="window__input" type="tel" name="telefone" id="tel_input" placeholder="Номер телефона" />
                <input className="window__input-submit" type="submit" />
            </form>
            </div>
        </div>
    );
}
 
export default Modal;