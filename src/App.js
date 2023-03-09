import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
