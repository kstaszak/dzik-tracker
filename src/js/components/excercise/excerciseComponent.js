import React, { Component } from 'react';
import SeriesComponent from '../series'

class ExcerciseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excercises: this.props.excercises
        }
    }

    render() {

        return (
            <div className="excercises">
                {this.state.excercises.map(function (ex) {
                    return (
                        <div>
                            <span>{ex.name}</span>
                            <ul>
                                <SeriesComponent series={ex.series} />
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ExcerciseComponent;
