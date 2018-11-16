import React, { Component } from 'react';
import TrainingComponent from '../training'

class HomeComponent extends Component {
    constructor(props){
        super(props);
    }
    
    render() {

      return (
        <div className="excercises">
			<TrainingComponent />
        </div>
      );
    }
  }
  
  export default HomeComponent;
  