import Modal from './Modal';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    isModalOpened : state.landingPage.isModalOpened
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
