import React from 'react';
import hash from 'object-hash';


const TableBody = ({data, headers, children, onSelectRow, ...props}) => (
    <tbody className={props.className} styles={props.styles}>
        { children }
        { data.map( (item,index) => {
            const key = hash(item);
            return (
                <tr key={key} onClick={() => onSelectRow(item)}>
                    { headers.map( (header,index) => (
                        <td key={key+header.field}>{item[header.field]}</td>
                    ) )}
                </tr>
            )
        } )}
    </tbody>
);

export default TableBody;