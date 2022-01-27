import React from "react";

class Box extends React.Component {
  renderInputWater() {
    if (this.props.icon !== "local_drink") {
      return (
        <form>
          <input min="0" max="0" value="" onImput=""></input>
        </form>
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
