import './styles/Projects.css'
import { SectionHeader, SubHeader } from "../components/Commons";
import Project from "../components/Project";
import { Link } from "react-router-dom";

export default function Projects() {
    const tMixGen = "[Work in Progress] MixGen is a web app leveraging the power of LLMs to automatically generate music playlists based on a natural language prompt. " +
    "After connecting to Spotify, MixGen will produce a list of candidate songs from your saved library based on your description. " +
    "You can then choose the songs you like and MixGen will create the playlist for you directly in your spotify account."
    const tAutoBio = "[Work in Progress] AutoBio is a web app for creating and sharing an illustrated autobiography. " +
    "Whether it be a journalling moment at the end of the day or an old memory that spontaneously pops into your head, " +
    "AutoBio will take that written version of the memory and help by indexing it temporally and automatically " +
    "supplying cohesive illustrations of your memories integrated into passages. " +
    "The ultimate vision is a persistant, indexed, illustrated autobiography that you can maintain and share."
    const tTrumpDivisiveness = "[PNAS Nexus] Do American presidents speak discernibly different from each other? If so, in what ways? And are these differences confined to any single medium of communication? To investigate these questions, this paper introduces a novel metric of uniqueness based on large language models, develops a new lexicon for divisive speech, and presents a framework for assessing the distinctive ways in which presidents speak about their political opponents. Applying these tools to a variety of corpora of presidential speeches, we find considerable evidence that Donald Trump's speech patterns diverge from those of all major party nominees for the presidency in recent history. Trump is significantly more distinctive than his fellow Republicans, whose uniqueness values appear closer to those of the Democrats. Contributing to these differences is Trump's employment of divisive and antagonistic language, particularly when targeting his political opponents. These differences hold across a variety of measurement strategies, arise on both the campaign trail and in official presidential addresses, and do not appear to be an artifact of secular changes in presidential communications."
    const tChessPuzzles = "A collection of chess puzzles I made myself. In each puzzle, there is only one objectively best sequence of moves that you must find to solve the puzzle. The best sequence does not necessarily always lead to checkmate."
    return (
        <div className="projects">
          <SectionHeader text="Some of my projects" alignment="Center" />
          <SubHeader className="projectsSubheader" text="Software" alignment="Left" />
          <hr className="sectionDivider"/>
          <Project title="MixGen" description={tMixGen} link="" source="https://github.com/3ilo/MixGen"/>
          <Project title="AutoBio" description={tAutoBio} link="" source="https://github.com/3ilo/AutoBio"/>
          <SubHeader className="projectsSubheader" text="Research" alignment="Left" />
          <hr className="sectionDivider"/>
          <Project title="Quantifying the Uniqueness of Donald Trump in Presidential Discourse" description={tTrumpDivisiveness} link="https://academic.oup.com/pnasnexus/advance-article/doi/10.1093/pnasnexus/pgae431/7814873" source="https://github.com/ChicagoHAI/debate-divisiveness"/>
          <SubHeader className="projectsSubheader" text="Puzzles" alignment="Left" />
          <hr className="sectionDivider"/>
          <Project title="Chess Puzzles" description={tChessPuzzles} link={<Link className="link" to="/chess"> [link]</Link>} source="/chess"/>
        </div>
    );
  }