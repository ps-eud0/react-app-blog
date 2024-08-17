import React from "react";
import '../BlogComponents/Blogs.css'

const PostHeader = ({ heading }) => {

    let content;

    if(heading === 'welcome!' || heading === 'Home') {
        content = <WelcomePostHeader/>
    } else {
        content = (
           <h1>{ heading }</h1>
        )
    }

    return (
        <div className="post-header" style={{ textAlign: 'center', marginTop: '5%', marginBottom: '3%' }}>
            {content}
        </div>
    )
};

export default PostHeader;

const WelcomePostHeader = ( { heading }) => {
    return (
        <div className="header-container">
            <h2>We Build <b>technology at Bricks,</b></h2>
            <h2>India's largest QnA for programmers.</h2>
            <br/>
            <div className="header-bar"></div>
        </div>
    );
};