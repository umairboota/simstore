import "./index.css";
// import "./App.css";
import "./Style/styles.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
// import Accordion from './Components/Accordion';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Sim from "./Components/Sim";
import Mobile from "./Components/Mobile";
import Devices from "./Components/Devices";
import About from "./Components/About";
import Abc from "./Components/Abc";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sims" element={<Sim />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/abc" element={<Abc />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
