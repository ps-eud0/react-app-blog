import React from "react";
import { Link } from "react-router-dom";
import './Headers.css'
import PostHeader from './PostHeader'

const Header = ( {heading, setHeading} ) => {
    return (
        <header className="headers-bg" style={{ minHeight: '40vh' }}>
            <nav className="navbar navbar-expand-lg" style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                <div className="container-fluid justify-content-between">
                    <Link className="navbar-brand fs-2" to="/" onClick={() => setHeading('welcome!')}>
                        BRICKS.tech
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link ms-3" to="/" onClick={() => setHeading('Home')}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-3" to="/blogs" onClick={() => setHeading('Blogs')}>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-3" to="/projects" onClick={() => setHeading('Projects')}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-3" to="/contact" onClick={() => setHeading('Contact')}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <PostHeader heading={heading} />

        </header>
    )
};

export default Header;