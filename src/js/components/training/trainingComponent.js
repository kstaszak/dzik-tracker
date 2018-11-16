import React, { Component } from 'react';
import Training from '../../dto/training.js'
//import WordsComponent from '../words'
//import AddWordComponent from '../words/add'

class TrainingComponent extends Component {
    constructor(props){
        super(props);

        var training = new Training();
        training.addExcercise('terefere');
        this.state = {
            excercises: training.getExcercises()
        }

    }
    addExcercise = (excercise) => {
        this.setState((state) => ({
            excercises: state.excercises.concat([excercise])
        }))
    }
    render() {

      return (
        <div className="excercises">
			<span> {this.state.excercises}</span>
        </div>
      );
    }
  }
  
  export default TrainingComponent;
  