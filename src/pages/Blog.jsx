import './styles/Blog.css'
import { SectionHeader } from "../components/Commons";
import BlogPost from "../components/BlogPost";
import { useEffect, useState } from "react";

/*
 * TODO: integrate with backend for easy create/delete/modify with persistant
 * data storage.
 */
export default function Blog() {
    const [posts, setPosts] = useState({});
    const postPath = "/BlogPosts/"
    const postFiles = {
        "7": "1 June 2024",
    }
    useEffect(() => {
        Object.entries(postFiles).forEach(([title, date]) => fetch(postPath+title+".txt").then(
            (res) => res.text().then(
                (text) => {
                    let newPost = {}; 
                    newPost[title]=text; 
                    setPosts({...posts, ...newPost })
                }
            )
        ));
    }, []);
    const RenderPosts = () => {
        const renderedPosts = []
        Object.entries(posts).forEach(([title, body]) => 
            renderedPosts.push(
                <BlogPost date={postFiles[title]} title={title} body={body}/>
            )
        )
        return (
            <>
            {renderedPosts}
            <hr className="divider"/>
            </>
        )
    }

    return ( 
      <div className="blog">
        <SectionHeader text="Blog" alignment="Center"/>
        <hr className="divider"/>
        <RenderPosts />
      </div>
    );
  }