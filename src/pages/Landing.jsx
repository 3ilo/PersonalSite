import './styles/landing.css';
import { Link } from "react-router-dom";
export default function Landing() {
    return (
      <div className="landingContent">
        <img src="../public/pfp.png" alt="profile picture" class="pfp"></img>
        <p> Hi! I'm Milo Chase, a software engineer in Portland, OR. I'm making 
            this site to share a bit about me, my professional profile, and other 
            <Link className="chessLink" to="/chess"> <b>fun stuff.</b></Link>
        </p>
      </div>
    );
  }