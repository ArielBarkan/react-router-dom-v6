// React imports
import React, { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  useRoutes,
} from "react-router-dom";
import styled from "styled-components";
// Custom imports
import { Home, About, Contact, Page404 } from "./pages";
import Navigation from "./nav/Navigation";

const loading = <div>Loading...</div>;

const PageWrapper = styled.div`
  padding: 0;
  margin: 0;
  background-color: #c0c0c0;
  min-height: 100vh;
`;

const routesRawArray: any = [
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/404", element: <Page404 /> },
];
const App = () => {
  const [isRoutesUpdated, setIsRoutesUpdated] = useState(0);

  const initRoutes: any = [
    { path: "/home", element: <Home /> },
    { path: "/", element: <Navigate to="/home" replace /> },
    { path: "*", element: <Page404 /> },
    { path: "/404", element: <Page404 /> },
  ];

  const updatedRoutes: any = routesRawArray.map((item: any) => {
    return {
      path: item.path,
      element: item.element,
    };
  });

  const [routesObject, setRoutesObject] = useState(initRoutes);
  let routes = useRoutes(routesObject);

  useEffect(() => {
    if (!isRoutesUpdated) {
      setIsRoutesUpdated(1);
      setTimeout(() => {
        console.log("Routes updated");
        setRoutesObject(updatedRoutes);
      }, 7000);
    }
  }, [routesObject]);

  return routes;
};

const AppWrapper = () => {
  return (
    <PageWrapper>
      <Router>
        <Navigation />
        <Outlet />
        <React.Suspense fallback={loading}>
          <App />
        </React.Suspense>
      </Router>
    </PageWrapper>
  );
};
export default AppWrapper;
