import { mail } from '../routes/routes';

import * as axios from 'axios';
import setFormName from './setFormName';
import setFormTelefone from './setFormTelefone';
import setModalHide from './setModalHide';

const sendForm = (name, tel) => dispatch => {    
    axios.post(mail, {
        name : name,
        tel : tel
    })
        .then(res => console.log(res.data))
        .then(() => {
            dispatch(setFormName(''));
            dispatch(setFormTelefone(''));
            alert('Успешно!');
        })
        .catch(err => {
            console.error(err);
            alert('Произошла ошибка!');
        })
        .finally(() => dispatch(setModalHide()))
};

export default sendForm;