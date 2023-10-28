import React, { Suspense, useEffect, useState } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { Body } from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestroMenu from "./Components/RestroMenu";
import UserContext from "./Utils/UserContext";

const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Anurag Dwivedi");
  }, []);

  return (
    <UserContext.Provider value={{ name: userName, setUserName }}>
      <div className="app">
        {/* {console.log(Header())} */}
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId",
        element: <RestroMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// not using keys (not-acceptable) <<< index as key <<< unique key
