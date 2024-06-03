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
        <p className={`${ props.className } generic alignment${props.alignment}`}> 
            {props.component}
        </p>
    )
}

export { SectionHeader, SubHeader, TextField, GenericWrapper };
