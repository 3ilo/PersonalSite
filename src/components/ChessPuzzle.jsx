import "./styles/ChessPuzzle.css";

export default function ChessPuzzle(props){
    const WhiteToMove = () => <p className="whiteToMove"><b>White</b> to move!</p>;
    const BlackToMove = () => <p className="blackToMove"><b>Black</b> to move!</p>;
    return(
        <div className="chessPuzzle">
            {props.isWhiteMove ? <WhiteToMove/> : <BlackToMove/>}
            <iframe className="chessPuzzleIframe" src={props.source}></iframe>
            <b className="puzzleTitle">{props.title}</b>
            <p className="puzzleDescription">{props.description}</p>
        </div>
    )
};