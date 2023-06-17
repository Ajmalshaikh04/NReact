import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Profile from "./components/ProfileClass";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default App;
