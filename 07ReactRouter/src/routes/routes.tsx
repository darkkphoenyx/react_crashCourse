import { createBrowserRouter } from "react-router-dom";
import Login from "../Login";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import AdminLayout from "../layouts/AdminLayout";
import AdminHome from "../components/Home/AdminHome";
import AdminAbout from "../components/About/AdminAbout";
import PrivateRoute from "./PrivateRoutes";
import Layout from "../layouts/Layout";
import { NotFound } from "../layouts/notFound";
import Contact from "../components/contact/Contact";
import User from "../components/User/User";
import Github, { githubInfoLoader } from "../components/Github/Github";
import Task1, { UserNotFound, usersData } from "../components/Challenges/Task1";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userid",
        element: <User />,
      },
      {
        loader: githubInfoLoader,
        path: "github",
        element: <Github />,
      },
      {
        path: "users/:id",
        element: <Task1 />,
        loader: usersData,
        errorElement: <UserNotFound />,
      },
      // {
      //   path: "*",
      //   element: <UserNotFound />,
      // },
    ],
  },
  {
    path: "/admin",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <AdminLayout />,
        children: [
          {
            path: "",
            element: <AdminHome />,
          },
          {
            path: "about",
            element: <AdminAbout />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
