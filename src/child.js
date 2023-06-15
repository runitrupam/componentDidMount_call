import React from "react";
class ChildComp extends React.Component {
  componentDidMount() {
    console.log("componentDidMount() lifecycle of child called");
  }
  render() {
    console.log("render() lifecycle - Child");
    return <h1 key={this.props.number}>{this.props.number} times</h1>;
  }
}

export default ChildComp;
