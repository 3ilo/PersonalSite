import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Chess from "./pages/Chess"
import NoPage from "./pages/NoPage";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />

        <hr />

        <Routes className="routes">
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/chess" element={<Chess />} />
          <Route path='*' element={<NoPage />} />
        </Routes>

        <hr />

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App
