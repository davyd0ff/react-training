import React from 'react';


const Filter = ({filter, onChangeFilter}) => (
    <input type="text" value={filter} onChange={(event) => onChangeFilter(event.target.value)} />
)

export default Filter;