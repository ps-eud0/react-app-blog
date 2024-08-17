import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import './Blogs.css'
import { blogPosts } from './BlogData.js'
import InsightFromDevsJourney from './BlogPostComponents/InsightFromDevsJourney.js'
import HelloWorld from "./BlogPostComponents/HelloWorld.js";
import BuildingWithPracticalWis from './BlogPostComponents/BuildingWithPracticalWis.js'

const BlogPost = ({ setHeading }) => {
  const { postId } = useParams();

  const post = blogPosts.find(blog => blog.postId === postId);

  useEffect(() => {
    if (post) {
      setHeading(post.title); 
    }
  }, [post, setHeading]);

  if (!post) {
    return <div>Post not found</div>;
  }

  let BlogContent = getBlogDisplay(post.postId)

  return (
    <div className="custom-container">
      {BlogContent ? <BlogContent className="description" /> : <div>Content not available</div>}
    </div>
  );
};

export default BlogPost;

const getBlogDisplay = (id) => {
  if(id === 'insights-from-devs-journey') {
      return InsightFromDevsJourney
  } else if( id === 'building-with-practical-wisdom') {
      return BuildingWithPracticalWis
  } else if(id === 'hello-world') {
      return HelloWorld
  }

};
