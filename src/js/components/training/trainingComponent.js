import React, { Component } from 'react';
import LastResultsComponent from '../lastResults'
import TableComponent from '../shared/table'
import moment from 'moment';
var axios = require('axios');

class TrainingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trainings: [],
            result: [],
            columns: []
        }
    }

    componentDidMount = () => {
        this.getItems();
    }

    getItems = () => {
        axios.get('generated.json')
            .then((res) => this.setState({ trainings: res.data }));

        axios.get('table.json')
            .then((res) => {
                this.setState({
                    result: res.data, columns: Object.keys(res.data[0]).map((key, id) => {
                        return {
                            Header: key,
                            accessor: key,
                            width: !this.isDateCol(key) ? 100 : 300,
                            Cell: row => (
                                !this.isDateCol(key) ?
                                    <span>{row.value}</span> : 
                                    <span>{this.prepareCell(row.value, id)}</span>
                            )
                        }
                    })
                })
            }

            );
    }

    isDateCol = (x) => {
        return moment(x, "YYYY-MM-DD", true).isValid();
    }

    prepareCell = (x, id) => {
        if (x === 'NULL') return '';
        let s = x.series.map((key, i) => {
            return <span key={i} style={{padding: '0.2em'}} ><span>{key.weight + 'kg '}</span> <span>{key.repeats}</span></span>;
        });

        return <div key={id}>{s} <span>{x.order}</span></div>
    }

    render() {
        return (

            <div className="trainings">
                <LastResultsComponent />

                {/* <TableComponent
                    data={this.state.result}
                    columns={this.state.columns}
                /> */}
                {/* {this.state.trainings.map(function (tr) {
                    return (
                        <div key={tr.index} className="concert">
                            <span>{tr.trainingDate}</span>
                            <ExcerciseComponent excercises={tr.excercises} />
                        </div>
                    );
                })} */}
            </div>
        );
    }
}

export default TrainingComponent;

