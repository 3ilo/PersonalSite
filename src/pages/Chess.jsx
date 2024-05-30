import './styles/Chess.css'
import './styles/Page.css'
import ChessPuzzle from '../components/ChessPuzzle'

export default function Chess() {
    return (
      <div className="page chess">
        <h1 className="header">
            My Puzzles
        </h1>
        <ChessPuzzle source="//www.chess.com/emboard?id=11858963" 
            title="night night" description="zzzzz ~1300" isWhiteMove={false}/>
        <ChessPuzzle source="//www.chess.com/emboard?id=11858949" 
            title="GEB" description="strange loops ~2800" isWhiteMove={false}/>
      </div>
    );
  }