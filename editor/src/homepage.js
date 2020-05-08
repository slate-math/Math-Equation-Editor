import React from "react";
import App from "./App";

const Home = () => {
  return (
    <>
      <h3>Equation Editor</h3>
      <div className="app-container">
        <div className="app">
          <App />
        </div>
      </div>
    </>
  );
};

export default Home;
