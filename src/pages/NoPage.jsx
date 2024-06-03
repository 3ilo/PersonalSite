import { SectionHeader, TextField } from '../components/Commons';
import { Link } from "react-router-dom";
import logo from '../static/logo.png';
import './styles/NoPage.css'

export default function NoPage() {
    const randomSeed = Math.round(Math.random() * 10);
    const errorMsgs = [
                    "Woah there pardner, nothin to see here",
                    "I think you're lost.....",
                    "How'd we even get here?"];
    return (
        <div className="noPage">
            <SectionHeader text={errorMsgs[randomSeed % 3]} alignment="Center"/>
            <img className="noPagePic" src={logo}></img>
            <TextField text={<Link to="/">Back to safety</Link>} alignment="Center"/>
        </div>
    );
}