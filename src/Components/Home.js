import {React, useState} from "react";
import {Link} from "react-router-dom"
import axios from 'axios'

function Home(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function onChangeUsername(e){
        setUser(e.target.value)
    }

    function onChangePassword(e){
        setPassword(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        axios.get('http://localhost:3000/Home')
        .then(response => {
            if(response.data.length > 0){
                setUser(response.data.map(user => user.username));
                setPassword(response.data.map(user => user.password));
            }
        });
    }

    return(
        <div className="home">
            <form className="form" method="POST">
                <fieldset>
                    <label>Username:<input type="text" onChange={onChangeUsername}/></label><br/>
                    <label>Password:<input type="password" onChange={onChangePassword}/></label><br/>
                    <Link to="/reset_password">Did you forget your password?</Link><br/>
                    <Link to="/Signup">Sign up</Link><br/><Link to="/Timeline" onSubmit={onSubmit}>Log in(Click here it is harcoded)</Link>
                </fieldset>
            </form>
        </div>
    );
};

export default Home;