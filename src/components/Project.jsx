import { GenericWrapper, TextField } from "./Commons";
import "./styles/Project.css";

export default function Project(props){
    const ProjectTitle = (props) => {
        return(
            <GenericWrapper component={<><h3 className="projectTitle">{props.title}</h3>
            {typeof props.link === "string" ? <a href={props.link}>&nbsp;[link]</a> : props.link}
            {typeof props.source === "string" ? <a href={props.source}>&nbsp;[source]</a> : props.source} 
            </>}/>
        )
    }
    const ProjectDescription = (props) => {
        return (
            <GenericWrapper className="projectBody" 
            component={props.body} alignment="Left"/>
        )
    }
    return(
        <div className="project">
            <ProjectTitle title={props.title} link={props.link} source={props.source}/>
            <ProjectDescription body={props.description}/>
            <hr className="divider"/>
        </div>
    )
};