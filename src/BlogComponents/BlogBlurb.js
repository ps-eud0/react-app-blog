import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Blogs.css'
import AuthBlurb from "./AuthBlurb";

const BlogBlurb = ({ title, description, author, designation, date, postId }) => {
    return (
        <div className="custom-container blurb">
            <h3><Link to={`/blogs/${postId}`} className="custom-link"> {title} </Link></h3>
            <div className="description"> {description} </div>
            <div class="horizontal-bar"></div>
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'left' }}>
                            <AuthBlurb authName={author} designation={designation}/>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                            {date}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

BlogBlurb.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired // Unique identifier for the blog post
};

export default BlogBlurb;