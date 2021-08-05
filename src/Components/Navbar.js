import React from "react";
import { Link } from 'react-router-dom';
import {AiTwotoneHome} from "react-icons/ai"
import {BsThreeDots, BsPeopleCircle, BsFullscreenExit, BsFillBellFill, BsFillEnvelopeFill, BsBookmarkFill, BsListTask} from "react-icons/bs";

function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/Timeline" className="navElement"><AiTwotoneHome/>Home</Link><br/>
            <Link to="/Explore" className="navElement"><BsFullscreenExit />Explore</Link><br/>
            <Link to="/Documentation" className="navElement"><BsFillBellFill/>Documentation</Link><br/>
            <Link to="/Messages" className="navElement"><BsFillEnvelopeFill/>Messages</Link><br/>
            <Link to="/Bookmarks" className="navElement"><BsBookmarkFill/>Bookmarks</Link><br/>
            <Link to="/Lists" className="navElement"><BsListTask/>Lists</Link><br/>
            <Link to="/Profile" className="navElement"><BsPeopleCircle/>Profile</Link><br/>
            <Link to="/More" className="navElement"><BsThreeDots/>More</Link><br/>
        </nav>
    );
}

export default Navbar;