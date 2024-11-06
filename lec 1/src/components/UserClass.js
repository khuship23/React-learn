import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 4,
    };
    // state variable earlier no state instance of the class should create a stat
  }
  componentDidMount() {}
  render() {
    // const {name, location} = this.props
    const { count, count2 } = this.state;
    return (
      <div className="myuser">
        <h2>Name: {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <h3>Location: Pune</h3>
        <h4>Contant: @khushiness</h4>
      </div>
    );
  }
}
export default UserClass;
