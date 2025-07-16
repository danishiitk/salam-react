import React from "react";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>About me</h1>
        <h2>This is {this.props.name}</h2>
        <h3>Count: {this.state.count}</h3>
      </div>
    );
  }
}
export default AboutClass;
