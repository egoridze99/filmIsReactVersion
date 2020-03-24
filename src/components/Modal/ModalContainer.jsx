import Modal from './Modal';
import { connect } from 'react-redux'

import setModalHide from '../../redux/actions/setModalHide'
import setFormName from '../../redux/actions/setFormName';
import setFormTelefone from '../../redux/actions/setFormTelefone';
import sendForm from '../../redux/actions/sendForm';

const mapStateToProps = state => ({
    isModalOpened : state.landingPage.isModalOpened,
    name : state.landingPage.formName,
    telefone : state.landingPage.formTelefone
})

const mapDispatchToProps = {
    closeWindow: setModalHide,
    setName: setFormName,
    setTelefone: setFormTelefone,
    sendForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
