import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Switcher from './components/switcher';
import Loader from './components/loader';


const App = ({data}) => (
    <Fragment>
        <Switcher />
        <Loader />
    </Fragment>
)

export default connect(({data}) => ({data}))(App);