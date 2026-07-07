import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./components/RestauarantMenu";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import LoginContext from "./components/LoginContext";
import appStore from "./utils/ReduxStore/appStore";
import { Provider } from "react-redux";

const AppLayout = () => {
  const { loggedInUser } = useContext(LoginContext);

  const [userName, setUserName] = useState("Srinu");

  return (
    <div>
      <Provider store={appStore}>
        <LoginContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </LoginContext.Provider>
      </Provider>
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={AppRouter} />);
