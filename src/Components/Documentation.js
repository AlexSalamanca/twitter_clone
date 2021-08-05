import React from 'react'

import Navbar from './Navbar'

export default function Documentation(){
    return(
        <div>
            <Navbar />
            <p> I ended up doing just the front end of the website instead of the full stack web</p>
            <h3>Features</h3>
            <ul>
                <li><p>Log in - Click it to go to the main page(it is harcoded because I had some problems with the back end)</p></li>
                <li><p>Sign up(it does not work because I had some problems with the back end) </p></li>
                <li><p>Write tweets</p></li>
                <li><p>Go to the profile and change your personal information or change the theme</p></li>
                <li><p>Go to Explore where you get some post from an API</p></li>
            </ul>
            <h3>Tutorials</h3>
            <ul>
                <li><a href="https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/" target="_blank" rel="noreferrer">Implement the theme switcher</a></li>
                <li><a href="https://www.youtube.com/watch?v=7CqJlxBYj-M&t=5206s" target="_blank" rel="noreferrer">Connect backend with frontend</a></li>
                <li><a href="https://www.youtube.com/watch?v=-RCnNyD0L-s&t=941s" target="_blank" rel="noreferrer"></a>Login System(https://www.youtube.com/watch?v=-RCnNyD0L-s&t=941s) anchor not working for some reason</li>
            </ul>
        </div>
    );
}