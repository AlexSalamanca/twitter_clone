import {useEffect, useState} from "react";
import Posts from "./Posts";
import Navbar from "./Navbar";

function Explore(){
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

    useEffect(() => {
        setAppState({loading: true});
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            setAppState({loading: false, posts: data.slice(0, 5)});
        });
    }, [setAppState]);

    return(
        <div className="facts">
            <Navbar />
            <Posts isLoading = {appState.loading}posts= {appState.posts} />
        </div>
    );
}

export default Explore;