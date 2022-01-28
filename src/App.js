import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Box from "./components/Box.js";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
  }
  onHeartChange(e) {
    this.setState({ heart: e.target.value });
    console.log(this.state.heart);
  }
  onStepsChange(e) {
    this.setState({ steps: e.target.value });
  }
  onTemperatureChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          {/* <Steps></Steps> */}
          heart :{heartMin}
          Temperature : {tempMin}
          Steps : {stepsMin}
          {/* PARTIE SUR LES BOX PAIRES ET IMPAIRES */}
          {/* <div className="box-pair">box-pair</div>
             <div className="box-impair">box-impair</div> */}
        </div>
        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            onInput={this.onStepsChange}
            min={stepsMin}
            max={stepsMax}
          />
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            onInput={this.onHeartChange}
            min={heartMin}
            max={heartMax}
          />
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            onInput={this.onTemperatureChange}
            min={tempMin}
            max={tempMax}
          />
        </div>
      </div>
    );
  }
}
export default App;
