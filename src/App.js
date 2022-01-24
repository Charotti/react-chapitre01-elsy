import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Steps from "./components/steps.js"
import './styles/global.css'

const tempMin= -20;
const tempMax= 40;
const heartMin= 80;
const heartMax= 180;
const stepsMin= 0;
const stepsMax= 50000;

class App extends React.Component {
  render() {
    return (
      <div 
         className="container-fluid ">
           <div class row>
             <Steps></Steps>
             <p>heart : 80</p>
             <p>Temperature : -20</p>
             <p>Steps : 0</p>
             <div className="box-pair">box-pair</div>
             <div className="box-impair">box-impair</div>
           </div>
      </div>
    );
  }
}
export default App;
