import './styles/landing.css';
import { Link } from "react-router-dom";
import { TextField } from '../components/Commons'

export default function Landing() {
    return (
      <div className="landingContent">
        <img src="../public/pfp.png" alt="profile picture" class="pfp"></img>
        <TextField className={"description"} text={<>Hi! I'm Milo Chase, a software engineer in Portland, OR. I'm making 
            this site to share a bit about me, my professional profile, and other 
            <Link className="chessLink" to="/chess"> <b>fun stuff.</b></Link></>} 
            alignment="Center"/>
      </div>
    );
  }