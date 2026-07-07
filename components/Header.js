import { useContext, useState } from "react";
import { Logo } from "../utils/constants";
import { Link } from "react-router";
import LoginContext from "./LoginContext";
import { useSelector } from "react-redux";
import { cartImage } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const { loggedInUser } = useContext(LoginContext);
  // console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className="flex items-center justify-between border border-black border-solid bg-pink-100 h-26">
      <img className="w-24" src={Logo} />
      <div className="flex items-center list-none m-8">
        <Link to="/">
          <li className="p-4">Home</li>
        </Link>
        <Link to={"/About"}>
          <li className="p-4">About</li>
        </Link>
        <Link to={"/Contact"}>
          <li className="p-4">Contact</li>
        </Link>
        <Link to={"/Cart"}>
          <li className="p-4 font-bold flex items-center">
            <img className="w-9" src={cartImage} />
            <span>({cartItems.length} items)</span>
          </li>
        </Link>
        <Link to={"/Grocery"}>
          <li className="p-4">Grocery</li>
        </Link>
        <li className="p-4">
          <button
            className=" outline-1 p-2.5 outline-black hover:cursor-pointer"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </li>
        <li>{loggedInUser}</li>
      </div>
    </div>
  );
};

export default Header;
