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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <h2 className="text-2xl text-gray-700 mb-2">This is {this.props.name}</h2>
          <h3 className="text-xl text-gray-600">Count: {this.state.count}</h3>
        </div>
      </div>
    );
  }
}
export default AboutClass;
