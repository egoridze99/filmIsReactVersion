import React, { useEffect } from 'react';

import Sales from './Sales';
import { connect } from 'react-redux'

import getSales from '../../redux/actions/getSales';

const mapStateToProps = (state) => ({
    sales: state.landingPage.sales
})

const mapDispatchToProps = {
    getSales
}

const SalesContainer = props => {
    const getSales = props.getSales;

    useEffect(() => {
        getSales();
    }, [getSales])

    return <Sales  
        sales = {props.sales}
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesContainer);