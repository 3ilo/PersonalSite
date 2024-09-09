import { GenericWrapper, TextField, EnrichedText } from "./Commons";
import "./styles/BlogPost.css";

export default function BlogPost(props){
    const BlogDate = (props) => {
        return <TextField className="blogDate" text={props.date} alignment="Center"/>
    }
    const BlogTitle = (props) => {
        return(
            <h3 className="blogTitle">
                {props.title}
            </h3>
        )
    }
    const BlogBody = (props) => {
        return (
            <EnrichedText className="blogBody" 
            content={props.body} alignment="Left"/>
        )
    }
    return(
        <div className="blogPost">
            <BlogDate date={props.date}/>
            <BlogTitle title={props.title}/>
            <BlogBody body={props.body}/>
            <hr className="divider"/>
        </div>
    )
};