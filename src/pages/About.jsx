import './styles/about.css'
import { SectionHeader, TextField, GenericWrapper } from '../components/Commons'
import { Link } from "react-router-dom";

export default function About() {
    const tSummary = "I'm a software engineer currently based in Portland,"
    +" Oregon. Professionally, my main interests are in machine learning, "+
    "computer security, and new technologies. I like to think about Artificial"+
    " Intelligence because I believe it will create the most transformative "+
    "changes of my generation." 
    const cHobbies = <ul>
      <li>Chess and <Link className="link" to="/chess"> chess puzzles.</Link>  Add me as a friend on <a href="https://link.chess.com/friend/lEyQ3w">chess.com!</a></li>
      <li>Climbing (mostly bouldering).</li>
      <li>Espresso, I'm still a novice but Portland is helping a lot.</li>
      <li>Spending time with family and friends.</li>
      <li>Writing down <Link className="link" to="/blog"> my thoughts</Link> on the things I'm reading occasionally.</li>
    </ul>
    const tWork = "I currently work at Amazon as a fullstack engineer."

    return (
        <div className="aboutSection">
          <SectionHeader text="About" alignment="Left" />
          <TextField text={tSummary} alignment="Left" />
          <TextField text={"Some of my other hobbies: "} alignment="Left" />
          <GenericWrapper component={cHobbies} alignment="Left" />
          <TextField text={tWork} alignment="Left" />
        </div>
    );
}