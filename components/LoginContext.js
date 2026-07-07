import { createContext } from "react";

const LoginContext = createContext({
  loggedInUser: "Usha",
  setUserName: () => {},
});

export default LoginContext;
