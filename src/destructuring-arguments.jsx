import React from 'react';
import './style.css';


const Foo = ({name, ...props}) => (
    <div>
        Hello, {name}!
        <Bar {...props} />
    </div>
);

const Bar = ({css, ...props}) => (
    <div className={css}>
        Hello, {props.name || 'none'}?
        <Baz {...props} />
    </div>
);

const Baz = ({css, ...props}) => (
    <div className={css || 'default'}>
        Hello, Baz!
    </div>
)

const DestructuringArguemnts = () =>(
    <Foo name='world' css='yellow' />
)

export default DestructuringArguemnts;
