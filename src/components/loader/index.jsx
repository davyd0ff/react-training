import React from 'react';
import {connect} from 'react-redux';


const Loader = ({isLoading, message}) => (isLoading ? (
    <div className='loader'>
        {message}
    </div>
) : null)

export default connect(({isLoading, message})=>({isLoading, message}))(Loader);