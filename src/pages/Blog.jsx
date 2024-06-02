import './styles/blog.css'
import { SectionHeader } from "../components/Commons";
import BlogPost from "../components/BlogPost";

/*
 * TODO: integrate with backend for easy create/delete/modify with persistant
 * data storage.
 */
export default function Blog() {
    return ( 
      <div className="blog">
        <SectionHeader text="Blog" alignment="Center"/>
        <hr className="divider"/>
        <BlogPost date="1 June 2024" title="Test title" body="test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body.test post body."/>
        <hr className="divider"/>
      </div>
    );
  }