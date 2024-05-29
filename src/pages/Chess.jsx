import './styles/Chess.css'
import ChessPuzzle from '../components/ChessPuzzle'

export default function Chess() {
    return (
      <div className="chess">
        <h1 className="header">
            My Puzzles
        </h1>
        <ChessPuzzle source="//www.chess.com/emboard?id=11855579" 
            title="night night" description="zzzzz ~1500" isWhiteMove={false}/>
        <ChessPuzzle source="//www.chess.com/emboard?id=11855751" 
            title="GEB" description="strange loops ~2800" isWhiteMove={false}/>
      </div>
    );
  }