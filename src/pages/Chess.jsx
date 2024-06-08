import './styles/Chess.css';
import ChessPuzzle from '../components/ChessPuzzle';
import { SectionHeader } from '../components/Commons';

export default function Chess() {
    return (
      <div className="chess">
        <SectionHeader text="My Puzzles" alignment="Center" />
        <ChessPuzzle source="//www.chess.com/emboard?id=11858963" 
            title="night night" description="zzzzz ~1300" isWhiteMove={false}/>
        <ChessPuzzle source="//www.chess.com/emboard?id=11858949" 
            title="idek bro" description="that's tough ~3100" isWhiteMove={false}/>
        <ChessPuzzle source="//www.chess.com/emboard?id=11867545" 
            title="call an ambulence!" description="but not for me ~1800" isWhiteMove={false}/>
        <ChessPuzzle source="//www.chess.com/emboard?id=11867535" 
            title="hail mary" description="never give up ~1500" isWhiteMove={false}/>
        <ChessPuzzle source="//www.chess.com/emboard?id=11871383" 
            title="GEB" description="strange loops ~1600" isWhiteMove={false}/>
      </div>
    );
  }