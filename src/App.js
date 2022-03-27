import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyTweetsProvider } from "./context/TweetContex";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./Pages/Profile/About";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <MyTweetsProvider>
        <Router>
          <Nav></Nav>
          <div className="pages">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" exact element={<Home />} />
            </Routes>
          </div>
        </Router>
        <div className="right"></div>
      </MyTweetsProvider>
    </div>
  );
}

export default App;
