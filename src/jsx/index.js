import React from "react";

/// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/// Css
// import "./index.css";

// /// Layout
import Nav from "./layouts/nav";
// import Footer from "./layouts/Footer";

/// Deshboard
import Home from "./components/Dashboard/Home/Home";

const Markup = () => {
  const routes = [
    /// Deshborad
    { url: "", component: Home },
  ];

  return (
    <Router basename="/">
      <div id="main-wrapper" className="show">
        <Nav />
        <div className="content-body">
          <div className="container-fluid">
            <Routes>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Routes>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default Markup;
