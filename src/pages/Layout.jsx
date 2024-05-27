import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
      <>
        <div id="sidebar">
          <h1>Page</h1>
            <nav>
              <Link to={"home"}>Home </Link>
              <Link to={"blog"}>Blog </Link>
            </nav>
          </div>
        <div id="detail"></div>
      </>
    );
  }