import { useContext } from "react";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
const {user,email}=useContext(UserContext)
  return (
    <div>
      <h1>About us</h1>
      <h2> {user.name}-{user.email}  </h2>
      <p>This is the NReact Finding the path</p>
    </div>
  );
};

export default AboutUs;
