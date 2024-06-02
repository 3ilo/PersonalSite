import './styles/about.css'
import { SectionHeader, TextField } from '../components/Commons'

export default function About() {
    return (
      <div className="aboutPage">
        <div className="aboutSection">
          <SectionHeader text="About" alignment="Left" />
          <TextField text="adfasdf" alignment="Left" />
        </div>
      </div>
    );
  }