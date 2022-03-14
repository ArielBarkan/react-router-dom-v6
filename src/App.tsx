// React imports
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import styled from "styled-components";
// Custom imports
import { Home, About, Contact } from "./pages";
import Navigation from "./nav/Navigation";

import "./App.css";

const loading = <div>Loading...</div>;

const PageWrapper = styled.div`
  padding: 0;
  margin: 0;
  background-color: #c0c0c0;
  min-height: 100vh;
`;
function App() {
  return (
    <PageWrapper>
      <Router>
        <Navigation />
        <Outlet />
        <React.Suspense fallback={loading}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </React.Suspense>
      </Router>
    </PageWrapper>
  );
}

export default App;
