import './styles/Chess.css';
import './styles/Page.css';
import ChessPuzzle from '../components/ChessPuzzle';
import { SectionHeader } from '../components/Commons';

export default function Chess() {
    return (
      <div className="page chess">
        <SectionHeader text="My Puzzles" alignment="Center" />
        <ChessPuzzle source="//www.chess.com/emboard?id=11858963" 
            title="night night" description="zzzzz ~1300" isWhiteMove={false}/>
        <ChessPuzzle source="//www.chess.com/emboard?id=11858949" 
            title="GEB" description="strange loops ~3100" isWhiteMove={false}/>
        <ChessPuzzle source="//www.chess.com/emboard?id=11867535" 
            title="call an ambulence!" description="but not for me ~1500" isWhiteMove={false}/>
        <ChessPuzzle source="//www.chess.com/emboard?id=11867545" 
            title="hail mary" description="never give up ~1800" isWhiteMove={false}/>
      </div>
    );
  }