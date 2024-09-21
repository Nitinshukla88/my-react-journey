import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is the About section of this food ordering website</h1>
      <User name = {"Nitin (functional)"} location = {"Kanpur(functional)"}/>
      <UserClass name = {"Nitin (class)"} location = {"Kanpur(Class)"}/>
    </div>
  );
};

export default About;
