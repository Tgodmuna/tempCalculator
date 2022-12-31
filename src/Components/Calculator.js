import React, { Component } from "react";
import './CalStyle.css'

class Calculator extends Component {
  constructor(props) {
    super(props);
  // this.onchangeTemperature = this.onchangeTemperature.bind(this)
    this.state = {
      celsius: "",
      fahrenheit: "",
      temperature: 0,
      mesuarment: '℃',
      SYMmesuarment: '℉',
    };
  }

  handlecelsius = (temperature) => {
      return (temperature * 5 / 9 + 32).toFixed(0)
  };

  handleFarenheit = (temperature) => {
     return ((temperature - 32) * 5 / 9).toFixed(0)
  }

  onchangeTemperature =(e) =>{
    this.setState({
      temperature:e.target.value
    })
  }
  

  render() {
    const {
      temperature,
      mesuarment,
      SYMmesuarment
    } = this.state;

    return (
      <div  >
        <div className="Holder">
          <h1>Temperature Converter from <span id='title'>FAHRENHEIT to CELSIUS</span> </h1>
          <br/>
          <input
          className="Temp-value"
            type="number"
            name="temperature" 
            placeholder="Enter a value in fahrenheits"
            value={temperature}
            onChange={this.onchangeTemperature}
          />;

          
        </div>
        <div className="Results">
          <p>Temperture: {temperature + "°"} in {SYMmesuarment}</p> 
          <p>equals
            <br/>
             {this.handleFarenheit(temperature)+ "°"} in {mesuarment}</p>
        </div>
      </div>
    );
  }
}
export default Calculator;
