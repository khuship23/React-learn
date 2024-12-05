import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "default",
        // avatar_url: "https://dummy-photo.com",
      },
    };
    // state variable earlier no state instance of the class should create a stat
  }
  async componentDidMount() {
    console.log("component did mount");
    // lifecycle => constructor, render, component did mount(only when component is mounted)
    // use to make api call but why because only component is render when only we make the api
    // as we dont want to wait for api to render the data
    //
    const data = await fetch("https://api.github.com/users/khuship23");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    //when components will be removed
    // we have return  function in useeffect for this
  }
  render() {
    // const {name, location} = this.props
    const { name, login, html_url, avatar_url } = this.state.userInfo;
    return (
      <div className="myuser">
        <h2>Name: {name}</h2>
        <img src={avatar_url} />
        {/* <button
          onClick={() => {
            // never update state variable directly
            // we make use of setstate function to update state
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <h3>Location:{html_url}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}
export default UserClass;
