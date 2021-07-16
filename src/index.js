import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />,
      <MainContent />,
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
