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
        axios.get('https://localhost:44307/api/trainings')
            .then((res) => {
                this.setState({
                    data: res.data, columns: Object.keys(res.data[0]).map((key, id) => {
                        return {
                            Header: key,
                            accessor: key,
                            Cell: row => (
                                key !== 'details' ?
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
        let s = JSON.parse(x).series.map((key, i) => {
        return [<td key={'w' + i}>{key.weight + 'kg '}</td>,<td key={'r' + i}>{key.repeats}</td>];
        });

        return <table key={id}><tbody><tr>{s}<td>{x.order}</td></tr></tbody></table>
    }

    render() {
        return (
            <div className="lastResults">
                <TableComponent
                    data={this.state.data}
                    columns={this.state.columns}
                />
            </div>
        );
    }
}

export default LastResultsComponent;

