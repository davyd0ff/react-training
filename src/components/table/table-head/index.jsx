import React from 'react';
import './styles.css';


const TableHead = ({headers, sortedBy, onClickHeader, ...props}) => (
    <thead className={props.className} styles={props.styles}>
        <tr>
            {headers.map( (header, index) => (
                <th key={index} onClick={() => onClickHeader(header.field)}>
                    <span>{header.label}</span>
                    {header.field===sortedBy.field ? (
                        sortedBy.way==='asc' ? (
                            <span>&#9660;</span>
                        ) : (
                            <span>&#9650;</span>
                        )
                    /* TODO DEVELOP: Посмотри, не влиляет ли null на рендер (прыгает колонка или нет)  */
                    ) : null}
                </th>
            ) )}
        </tr>
    </thead>
);

export default TableHead;