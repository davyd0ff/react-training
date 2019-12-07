import React, {Fragment} from 'react';
import './style.css';


const StatelessComponent = (props) => (
    <div className='default' {...props} />
)

const Red = {
    className: 'red',
    children: 'Hi, world!',
}
const Yellow = {
    className: 'yellow',
    children: 'Hi, World!',
}
const None = {
    className: 'none',
    children: <p>None</p>
}

const SpreadAttributes = () => (
    <Fragment>
        <StatelessComponent className='green'>
            Hello, World!
        </StatelessComponent>

        {/* Красный фон */}
        <StatelessComponent {...Red} />

        {/* Желтый фон */}
        <StatelessComponent className='none' {...Yellow} />

        {/* Черный фон */}
        <StatelessComponent {...None} className='black' />

        <StatelessComponent>Default</StatelessComponent>
    </Fragment>
);


export default SpreadAttributes;