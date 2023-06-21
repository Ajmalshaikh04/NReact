// import React from "react";
// import ReactDOM from "react-dom";

// // react element
// // const title = (
// //     <h1>This is React Element</h1>
// // )
// const Title = () => (
//     <h1>This is React Element</h1>
// )

// //react component
// const HeaderComp = () => {
//     return (
//         <div>
//             {/* this is known as component composition */}
//             <Title />
//             {/* {title} */}
//             <h2>
//                 this is React Component
//             </h2>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<HeaderComp />)

//================================================================================================

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import InstaMart from "./components/InstaMart";

const InstaMart = lazy(() => import("./components/InstaMart"));
// upon on Demand loading, --> upon render --> suspend loading

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* According to the rout All children will go into Outlet */}
      {/* Outlet */}
      <Outlet />
      <Footer />
    </>
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
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
