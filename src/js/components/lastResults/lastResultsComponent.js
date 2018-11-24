import React, { Component } from 'react';
import TableComponent from '../shared/table'
var axios = require('axios');

class LastResultsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            columns: []
        }
    }

    componentDidMount = () => {
        this.getItems();
    }

    getItems = () => {
        axios.get('last.json')
            .then((res) => {
                this.setState({
                    data: res.data, columns: Object.keys(res.data[0]).map((key, id) => {
                        return {
                            Header: key,
                            accessor: key,
                            Cell: row => (
                                key !== 'Details' ?
                                    <span>{row.value}</span> :
                                    <span>{this.prepareCell(row.value, id)}</span>
                            )
                        }
                    })
                })
            }
        );
    }

    prepareCell = (x, id) => {
        if (x === 'NULL') return '';
        let s = x.series.map((key, i) => {
            return <span key={i} style={{ padding: '0.2em' }} ><span>{key.weight + 'kg '}</span> <span>{key.repeats}</span></span>;
        });

        return <div key={id}>{s} <span>{x.order}</span></div>
    }

    render() {
        return (
            <div className="trainings">
                <TableComponent
                    data={this.state.data}
                    columns={this.state.columns}
                />
            </div>
        );
    }
}

export default LastResultsComponent;

