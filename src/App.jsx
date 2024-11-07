import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component1/context/home";
import Context from "./component1/context/Context";
import Cart from "./component1/context/Cart";

function App() {
  return (
    <Router>
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartlist" element={<Cart/>} />
        </Routes>
      </Context>
    </Router>
  );
}

export default App;
