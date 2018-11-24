import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class TableComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            columns: []
        }
    }

    componentWillReceiveProps(p){
        if(p.data !== this.props.data){
            this.setState({
                        data: p.data,
                        columns: p.columns
                    })
        }
    }

    render() {
        return (
            <div className="table">
                {<ReactTable
                    data={this.state.data}
                    columns={this.state.columns}
                />}
            </div>
        );
    }
}

export default TableComponent;

