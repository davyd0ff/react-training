import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Switcher from './components/switcher';
import Loader from './components/loader';
import Table from './components/table';

import {headers} from './headers';


const styles = {
    table: {
        className: 'table table-hover',
    },
    tableHead: {
        className: 'thead-dark',
    },
};


const App = ({data}) => {
    const table = {...styles, data, headers}
    return (
        <Fragment>
            <Switcher />
            <Table {...table} />
            <Loader />
        </Fragment>
    )
}

export default connect(({data}) => ({data}))(App);