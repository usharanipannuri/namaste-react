import { useContext } from "react";
import LoginContext from "./LoginContext";

const About = () => {
  const { loggedInUser } = useContext(LoginContext);
  return (
    <div className="text-3xl mx-auto mt-6 text-center bg-gray-100 p-8 rounded-lg w-2xl">
      <h1>This is about page</h1>
      <span className="font-light text-2xl">Coming soon.......</span>
      <h1>{loggedInUser}</h1>
    </div>
  );
};

export default About;
