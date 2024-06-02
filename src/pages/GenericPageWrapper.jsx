import './styles/GenericPageWrapper.css'

export default function GenericPageWrapper(props) {
    return (
      <div className="commonPage">
        {props.page}
      </div>
    )
}