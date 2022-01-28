import React from "react";

class Box extends React.Component {
  renderInputWater() {
    if (this.props.icon !== "local_drink") {
      return (
        <div>
          <input
            min={this.props.min}
            max={this.props.max}
            onChange={(e) => this.props.onInput(e)}
            type="range"
          ></input>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="box col-sm-3 col-6">
        <span
          className="material-icons"
          style={{ color: this.props.color, fontSize: 100 }}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value} {this.props.unit}
        </p>
        <form>{this.renderInputWater()}</form>
      </div>
    );
  }
}
export default Box;
