import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
      <div>
        <h1>About</h1>
        <User name={"Khushi (function)"} />
        <UserClass name={"Khushi (class)"} />
      </div>
    );
}

export default About;