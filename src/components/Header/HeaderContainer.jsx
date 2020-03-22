import Header from './Header';
import logo from './assets/logo.png';

import toggleMenu from '../../redux/actions/toggleMenu';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
    logo,
    isMenuOpened : state.landingPage.isMenuOpened
});

const mapDispatchToProps = {
    toggleMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);