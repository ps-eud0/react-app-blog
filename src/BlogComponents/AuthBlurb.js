import React from "react";
import pic1 from '../pictures/pic1.png'
import pic2 from '../pictures/pic2.jpg'
import './Blogs.css'

const AuthBlurb = ({ authName, designation }) => {
    let pic = getDisplayPic(authName)
    return (
        <div className="auth-blurb">
            
            <img src={pic} class="circular-img" alt="..."></img>
            <div className="auth-text">
                <div className="auth-name"> {authName} </div>
                <div className="auth-designation">{designation}</div>
            </div>
        </div>
    )
};

const getDisplayPic = (authName) => {
    if(authName === 'Aarushi S.')
        return pic1
    else    
        return pic2
}

export default AuthBlurb;