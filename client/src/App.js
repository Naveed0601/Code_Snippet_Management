import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
