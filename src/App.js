import React, {Component} from 'react';
import './App.css';


import Slider from './components/Slider/Slider';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <Slider sliderName="sliderA" />
          </div>
          <div className='col s12 l6'>
            <Slider sliderName="sliderB" />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
