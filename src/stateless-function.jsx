import React from 'react';
import PropTypes from 'prop-types';


const StatelessFunction = (props) => (
    <div>
        Hello, {props.name}!
    </div>
);

StatelessFunction.propTypes = {
    name: PropTypes.string.isRequired
}

export default StatelessFunction;