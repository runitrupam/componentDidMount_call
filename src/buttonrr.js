import React, { Component } from "react";
import ChildComp from "./child";

class DemoLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  componentDidMount() {
    console.log("componentDidMount() lifecycle of parent called");
  }
  incrementHandler = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };
  render() {
    console.log("render() lifecycle - Parent");
    return (
      <div>
               
        <button onClick={this.incrementHandler}>Click to Increment</button>
        {/* <ChildComp key={this.state.counter} number={this.state.counter} />   {" "} */}
        <ChildComp key={"constant"} number={this.state.counter} />
           {/* if the key is constant than the COmpDidMount is not called */}
      </div>
    );
  }
}

export default DemoLifecycle;
