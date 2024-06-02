import './styles/commons.css'

const SectionHeader = (props) => {
    return (
        <h1 className={`${ props.className } header alignment${props.alignment}`}>
            {props.text}
        </h1>
    );
}

const TextField = (props) => {
    return (
        <p className={`${ props.className } text alignment${props.alignment}`}> 
            {props.text}
        </p>
    )
}

export { SectionHeader, TextField };
