import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Services from "./Services.jsx";
import Resume from "./Resume.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import HireMe from "./HireMe.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/hire-me",
    element: <HireMe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
