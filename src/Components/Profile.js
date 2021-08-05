import React, { useState, useRef, useEffect } from 'react';
import {ThemeProvider} from'styled-components';

import Navbar from './Navbar';
import {GlobalStyles} from './globalStyles'
import {lightTheme, darkTheme} from './Themes'
import {useDarkMode} from './useDarkMode';
import Toggle from './Toggler'

function usePrevious(value){
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

function Profile(){
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [isEditing, setEditing] = useState(false);
    const wasEditing = usePrevious(isEditing);
    const editFieldRef = useRef(null);
    const editButtonReff = useRef(null);
    const[theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    function onChangeFirstName(e){
        setFirstName(e.target.value);
    }

    function onChangeLastName(e){
        setLastName(e.target.value);
    }

    function onChangeUsername(e){
        setUsername(e.target.value);
    }

    function onChangeEmail(e){
        setEmail(e.target.value);
    }

    function onChangeBirthdate(e){
        setBirthdate(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        setEditing(false);
    }

    const editTemplate = (
        <div>
            <form onSubmit={onSubmit}>
                <label>First Name: </label><input type="text" onChange={onChangeFirstName} value={first_name} ref={editFieldRef}></input><br/>
                <label>Last Name: </label><input type="text" onChange={onChangeLastName} value={last_name} ref={editFieldRef}></input><br/>
                <label>Userame: </label><input type="text" onChange={onChangeUsername} value={username} ref={editFieldRef}></input><br/>
                <label>Email: </label><input type="text" onChange={onChangeEmail} value={email} ref={editFieldRef}></input><br/>
                <label>Birthdate: </label><input type="text" onChange={onChangeBirthdate} value={birthdate} ref={editFieldRef}></input><br/>
                <input type="submit" onClick={() => setEditing(false)} value="Submit changes"></input>
            </form>
        </div>
    );

    const viewTemplate = (
        <div>
            <label>First Name: </label>{first_name}<br/>
            <label>Last Name: </label>{last_name}<br/>
            <label>Username: </label>{username}<br/>
            <label>Email: </label>{email}<br/>
            <label>Birthdate: </label>{birthdate}<br/>
            <input type="button" onClick={() => setEditing(true)} value="Edit your personal information" ref={editButtonReff}></input><br/>
        </div>
    )

    useEffect(() => {
        if(!wasEditing && isEditing){
            editFieldRef.current.focus();
        }
        if(wasEditing && !isEditing){
            editButtonReff.current.focus();
        }
    }, [wasEditing, isEditing]);

    
    return(
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                    <div>
                        <div className="profile">
                            <Navbar />
                        </div>
                        <div>
                            <fieldset>
                                {isEditing ? editTemplate : viewTemplate}
                            </fieldset>
                        </div>
                        <div>
                            <Toggle theme={theme} toggleTheme={themeToggler} />
                        </div>
                        
                    </div>
            </>
        </ThemeProvider>
        
    );
}

export default Profile;