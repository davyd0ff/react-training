import React, {Fragment} from 'react';

import TableHead from './table-head';
import TableBody from './table-body';
import Filter from './table-filter';


class Table extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sortedBy: { field: undefined, way: 'asc' },
            filter: '',
            pagination: {
                countShowedRows: 50, currentPage: 1
            }
        }
    }

    onClickHeader = (field) => {
        this.setState( ({sortedBy}) => ({
            sortedBy: {
                field, 
                way: (sortedBy.field !== field || sortedBy.way !== 'asc') ? 'asc' : 'desc'
            }
        }) );
    }
    onSelectRow = (item) => {
        console.log(item);
    }
    onChangeFilter = (filter) => {
        this.setState({filter});
    }
    onClickPagination = (currentPage) => {
        this.setState( ({pagination}) => ({
            pagination: { ...pagination, currentPage }
        }) );
    }

    
    sortAsc = (a, b, orderBy, {isNumeric}=false) => {
        if(isNumeric) { return a[orderBy]-b[orderBy]; }
        if(a[orderBy]<b[orderBy]){ return -1; }
        if(a[orderBy]>b[orderBy]){ return 1; }
        return 0;
    }

    render() {
        const {headers} = this.props;
        const {filter, sortedBy, pagination:{countShowedRows, currentPage}} = this.state;

        const tableHeadParams = { 
            headers, sortedBy, 
            onClickHeader: this.onClickHeader
        };
        const tableBodyParams = {
            headers,
            data: this.props.data
                    .filter(item => headers.some(header => item[header.field] && item[header.field].toString().includes(filter)))
                    .sort((a,b) => sortedBy.way === 'asc' 
                        ?  this.sortAsc(a, b, sortedBy.field, headers.find(header => header.field === sortedBy.field)) 
                        : -this.sortAsc(a, b, sortedBy.field, headers.find(header => header.field === sortedBy.field)))
                    .slice(currentPage*countShowedRows-countShowedRows, currentPage*countShowedRows),
            onSelectRow: this.onSelectRow
        };
        const filterParams = {
            filter, onChangeFilter: this.onChangeFilter
        };


        return (
            <div>
                <Filter {...filterParams} />
                <table className={this.props.table && this.props.table.className}>
                    <TableHead {...tableHeadParams} {...this.props.tableHead} />
                    <TableBody {...tableBodyParams}>
                    </TableBody>
                </table>
            </div>
        )
    }
}

export default Table;

