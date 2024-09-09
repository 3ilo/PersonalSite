import './styles/Blog.css'
import { SectionHeader } from "../components/Commons";
import BlogPost from "../components/BlogPost";
import { useEffect, useState } from "react";

/*
 * TODO: integrate with backend for easy create/delete/modify with persistant
 * data storage.
 */
export default function Blog() {
    const [posts, setPosts] = useState([]);
    const contentPath = "/BlogPosts/posts.json"

    const fetchPostsData = async () => {
        const response = await fetch(contentPath);
        const jsonContent = await response.json();
        setPosts(jsonContent);
    }

    useEffect(() => {
        fetchPostsData();
    }, [])

    return ( 
      <div className="blog">
        <SectionHeader text="Blog" alignment="Center"/>
        <hr className="divider"/>
        {posts.toReversed().map((p) => <BlogPost key={p["title"]} date={p["date"]} title={p["title"]} body={p["md_content"]}/>)}
      </div>
    );
  }