import Hero from './Hero';

import { connect } from 'react-redux'

import setModalVisible from '../../redux/actions/setModalVisible';

const mapDispatchToProps = {
    setModalVisible
};

export default connect(null, mapDispatchToProps)(Hero);