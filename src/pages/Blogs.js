import React from "react";
import BlogBlurb from '../BlogComponents/BlogBlurb'
import { blogPosts } from '../BlogComponents/BlogData.js'

const Blogs = () => {
    return (
        <div>
            {blogPosts.map((blurb, index) => (
                <BlogBlurb
                    key={index}
                    title={blurb.title}
                    description={blurb.description}
                    author={blurb.author}
                    designation={blurb.designation}
                    date={blurb.date}
                    postId={blurb.postId}
                />
            ))}
        </div>
    );
};

export default Blogs;