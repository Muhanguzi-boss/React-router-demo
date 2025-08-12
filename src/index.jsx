import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../Host/Dashboard";

function App() {
  return <h1>Hello, React Router!</h1>;
}
function About() {
  return <p>Welecome to the about Page Boss_man!!!</p>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
