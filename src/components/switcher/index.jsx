import React from 'react';
import {connect} from 'react-redux';
import { LOAD_DATA } from '../../store/actionTypes';


class Switcher extends React.Component {
    constructor(props){
        super(props);

        this.handlerChange = this.handlerChange.bind(this);

        this.state = {
            isLoadBigData: this.props.isLoadBigData
        };
    }

    componentDidMount(){
        if(this.props.isLoadBigData){
            this.props.loadData(`http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`);
        } else {
            this.props.loadData(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
        }
    }

    handlerChange(event) {
        const isLoadBigData = !this.state.isLoadBigData;
        this.setState({isLoadBigData});

        if(isLoadBigData){
            this.props.loadData(`http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`);
        } else {
            this.props.loadData(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
        }
    }


    render(){
        return (
            <div>
                <div>
                    <label htmlFor='load-big-data'>Load big data</label>
                    <input id="load-big-data" type="radio" name="radio-select-load" value="big" 
                           checked={this.state.isLoadBigData} onChange={this.handlerChange} />
                </div>
                <div>
                    <label htmlFor='load-small-data'>Load small data</label>
                    <input id="load-small-data" type="radio" name="radio-select-load" value="small"
                           checked={!this.state.isLoadBigData} onChange={this.handlerChange} />
                </div>
            </div>
        )
    }
}


export default connect(null, 
    (dispatch) => ({
        loadData: (url) => dispatch({type: LOAD_DATA, url}),
    })
)(Switcher);