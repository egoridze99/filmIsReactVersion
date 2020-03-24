import React, { useState } from "react";
import classnames from "classnames";

import "./index.scss";
import "../../animations.scss";

const Modal = props => {
    const [visible, setVisible] = useState(true);

    const closeWindow = event => {
        if (
            event.target.classList.contains("modal") || // Проверка нажатие по фону или кнопке
            event.target.classList.contains("window__close")
        ) {
            setVisible(false);

            setTimeout(() => {
                props.closeWindow();
                setVisible(true);
            }, 700);
        }
    };

    const modal = (
        <div
            className={classnames(
                "modal",
                "modal-visible",
                visible ? "fade-in" : "fade-out"
            )}
            onClick={closeWindow}
        >
            <div
                className={classnames(
                    "modal__window",
                    visible ? "zoom-in" : "zoom-out"
                )}
            >
                <button className="window__close"></button>
                <p className="window__title">Обратный звонок</p>
                <form
                    action="/dist/php/mail.php"
                    method="POST"
                    id="form"
                    className="window__form"
                    onSubmit={ event => {event.preventDefault(); props.sendForm(props.name, props.telefone)}}
                >
                    <input
                        className="window__input"
                        type="text"
                        placeholder="Имя"
                        defaultValue={props.name}
                        id="name_input"
                        onInput={event => props.setName(event.target.value)}
                    />
                    <input
                        className="window__input"
                        type="tel"
                        name="telefone"
                        id="tel_input"
                        placeholder="Номер телефона"
                        defaultValue={props.telefone}
                        onInput={event => props.setTelefone(event.target.value)}
                    />
                    <input className="window__input-submit" type="submit" />
                </form>
            </div>
        </div>
    );

    return props.isModalOpened ? modal : <></>;
};

export default Modal;
