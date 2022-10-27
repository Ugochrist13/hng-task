import { useState } from "react";
import "./App.css";
import Links from "./components/Links";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Profile />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
