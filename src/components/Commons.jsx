import ReactMarkdown from 'react-markdown'
import './styles/Commons.css'

const SectionHeader = (props) => {
    return (
        <h1 className={`${ props.className } header alignment${props.alignment}`}>
            {props.text}
        </h1>
    );
}

const SubHeader = (props) => {
    return (
        <h3 className={`${ props.className } subheader alignment${props.alignment}`}>
            {props.text}
        </h3>
    );
}

const TextField = (props) => {
    return (
        <p className={`${ props.className } text alignment${props.alignment}`}> 
            {props.text}
        </p>
    )
}

const GenericWrapper = (props) => {
    return (
        <div className={`${ props.className } generic alignment${props.alignment}`}>
            {props.component}
        </div>
    )
}

const EnrichedText = (props) => {
    return (
        // <div className={`${ props.className } generic alignment${props.alignment}`} dangerouslySetInnerHTML={{__html: props.content}} />
        <ReactMarkdown className={`${ props.className } generic alignment${props.alignment}`} children={props.content}></ReactMarkdown>
    )
}

export { SectionHeader, SubHeader, TextField, GenericWrapper, EnrichedText };
