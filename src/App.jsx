import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";
// import Projects from "./pages/Projects";
// import NoPage from "./pages/NoPage";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Layout</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/">
            <Layout />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="home" element={<Home />} />
    //       <Route path="blog" element={<Blog />} />
    //       {/* <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="resume" element={<Resume />} />
    //       <Route path="projects" element={<Projects />} />
    //       <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App
