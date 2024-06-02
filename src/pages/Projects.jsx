import './styles/projects.css'
import { SectionHeader, SubHeader } from "../components/Commons";
import Project from "../components/Project";

export default function Projects() {
    const tMixGen = "[Work in Progress] MixGen is a web app leveraging the power of LLMs to automatically generate music playlists based on a natural language prompt. " +
    "After connecting to Spotify, MixGen will produce a list of candidate songs from your saved library based on your description. " +
    "You can then choose the songs you like and MixGen will create the playlist for you directly in your spotify account."
    const tAutoBio = "[Work in Progress] AutoBio is a web app for creating and sharing an illustrated autobiography. " +
    "Whether it be a journalling moment at the end of the day or an old memory that spontaneously pops into your head, " +
    "AutoBio will take that written version of the memory and help by indexing it temporally and automatically " +
    "supplying cohesive illustrations of your memories integrated into passages. " +
    "The ultimate vision is a persistant, indexed, illustrated autobiography that you can maintain and share."
    const tTrumpDivisiveness = "[Preprint] Does Donald Trump speak differently from other presidents? If so, in what ways? Are these differences confined to any single medium of communication? To investigate these questions, this paper introduces a novel metric of uniqueness based on large language models, develops a new lexicon for divisive speech, and presents a framework for comparing the lexical features of political opponents. Applying these tools to a variety of corpora of presidential speeches, we find considerable evidence that Trump's speech patterns diverge from those of all major party nominees for the presidency in recent history. Some notable findings include Trump's employment of particularly divisive and antagonistic language targeting of his political opponents and his patterns of repetition for emphasis. Furthermore, Trump is significantly more distinctive than his fellow Republicans, whose uniqueness values are comparably closer to those of the Democrats. These differences hold across a variety of measurement strategies, arise on both the campaign trail and in official presidential addresses, and do not appear to be an artifact of secular time trends."
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
          <Project title="Quantifying the Uniqueness of Donald Trump in Presidential Discourse" description={tTrumpDivisiveness} link="https://arxiv.org/abs/2401.01405" source="https://github.com/ChicagoHAI/debate-divisiveness"/>
          <SubHeader className="projectsSubheader" text="Puzzles" alignment="Left" />
          <hr className="sectionDivider"/>
          <Project title="Chess Puzzles" description={tChessPuzzles} link="/chess" source="/chess"/>
        </div>
    );
  }