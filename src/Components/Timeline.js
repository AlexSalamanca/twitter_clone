import {React, useState} from 'react';
//import axios from 'axios';
import { nanoid } from 'nanoid';


import Navbar from './Navbar';
import CreateTweet from './CreateTweet';
import Tweet from './Tweet';

function Timeline(){
    const [tweets, setTweets] = useState([]);

    function addTweet(description){
        const newTweet = {
            id: "tweet-" + nanoid(),
            description: description,
            user: null,
            date: new Date(),
            retweets: 0,
            likes: 0
        };
        setTweets([...tweets, newTweet]);
    }

    const tweetList = tweets
    .sort((a, b) => {
        let dateA = a.date;
        let dateB = b.date;
        return (dateA > dateB) ? -1 : (dateA < dateB) ? 1 : 0;
    })
    .map(tweet => (
        <Tweet
            id={tweet.id}
            description={tweet.description}
            user={tweet.user}
            date={tweet.date}
            retweets={tweet.retweets}
            likes={tweet.likes}
        />
    ))
    return(
        <div className="main-screen">
            <div className="timeline navbar">
                <Navbar />
            </div>
            <div className="timeline">
                <CreateTweet addTweet={addTweet}/>
                <div>
                    {tweetList}
                </div>
            </div>
        </div>
    )

}

export default Timeline;