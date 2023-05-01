import React, { Component } from "react";
import "../../App.css";
interface newProps {
  //
}
interface newState {
  text?: string;
}
class ModernComponent extends Component<newProps, newState> {
  state = {
    text: "Modern Component",
  };

  //To initiate the state change in old component
  changeOld = (): void => {
    window.dispatchEvent(new Event("fromreact"));
  };

  //TO handle state change requested from old component
  handleStorage = () => {
    this.setState(JSON.parse(window.localStorage.getItem("state") || ""));
  };

  componentDidMount() {
    window.addEventListener("storage", this.handleStorage);
  }

  componentWillUnmount() {
    window.removeEventListener("storage", this.handleStorage);
  }
  render() {
    return (
      <>
        <div className="boundary">
          <div>{this.state.text}</div>
          <button className="ModCompButton" onClick={this.changeOld}>
            Modern Button
          </button>
        </div>
      </>
    );
  }
}

export default ModernComponent;
