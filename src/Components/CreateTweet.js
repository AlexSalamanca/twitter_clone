import {React} from "react";
import { useState } from "react/cjs/react.development";

function CreateTweet(props){
    const [description, setDescription] = useState("");

    function onChangeText(e){
        setDescription(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        props.addTweet(description);
        setDescription('');
    }

    return(
        <form onSubmit={onSubmit}>
            <fieldset>
                <textarea 
                    required 
                    maxLength="240" 
                    placeholder="What is in your mind?" 
                    cols="70" rows="10"
                    value={description}
                    onChange={onChangeText}    
                ></textarea><br />
                <input type="submit" value="Send Tweet"/>
            </fieldset>
        </form>
    );
}

export default CreateTweet;
