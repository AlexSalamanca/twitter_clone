import React from 'react';
import { BsStarFill, BsStar } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";

function Tweet(props){
    return(
        <div className="tweet">
            {props.description}
            <br />
            <form>
                <button><AiOutlineRetweet /></button>
                <button type="button"><BsStar /></button>
            </form>
        </div>
    )
}

export default Tweet;