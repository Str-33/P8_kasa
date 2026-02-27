import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.jsx";
import Banner from "./components/banner/Banner.jsx";
import Gallery from "./pages/home/home.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.css";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <><Gallery /></> },
      { path: "/About", element: <h1>A Propos</h1> },
      { path: "/Location", element: <h1>Location</h1> },
      { path: "/*", element: <h1>404 - Page non trouvée</h1> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;