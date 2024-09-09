import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Chess from "./pages/Chess"
import NoPage from "./pages/NoPage";
import GenericPageWrapper from "./pages/GenericPageWrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import './App.css'

function App() {

  return (
    <HashRouter>
      <div className="app">
        <NavBar />

        <hr />

        <Routes className="routes">
          <Route path="/" element={<GenericPageWrapper page={<Landing />} />} />
          <Route path="/about" element={<GenericPageWrapper page={<Home />} />} />
          <Route path="/blog" element={<GenericPageWrapper page={<Blog />} />} />
          <Route path="/contact" element={<GenericPageWrapper page={<Contact />} />} />
          <Route path="/projects" element={<GenericPageWrapper page={<Projects />} />} />
          <Route path="/resume" element={<GenericPageWrapper page={<Resume />} />} />
          <Route path="/chess" element={<GenericPageWrapper page={<Chess />} />} />
          <Route path='*' element={<GenericPageWrapper page={<NoPage />} />} />
        </Routes>

        <hr />

        <Footer />

      </div>
    </HashRouter>
  );
}

export default App
