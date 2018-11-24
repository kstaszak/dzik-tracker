import React, { Component } from 'react';

class SeriesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: this.props.series
        }
    }

    render() {

        return (
            <div className="series">
                {this.state.series.map(function (s) {
                    return (
                        <li>
                            <span>{s.weight}</span>
                            <span>{s.repeats}</span>
                        </li>
                    );
                })}
            </div>
        );
    }
}

export default SeriesComponent;
