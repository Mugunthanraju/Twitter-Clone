import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Mugunthan Raju',
            username: 'Mugunthanraju',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 
            "https://1000logos.net/wp-content/uploads/2017/04/Symbol-Motorola.jpg",
            
        });

        setTweetMessage("");
        setTweetImage("");
    };
    
    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://1000logos.net/wp-content/uploads/2017/04/Symbol-Motorola.jpg"/>
                    <input 
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text" />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage} 
                    className="tweet_image"
                    placeholder="Optional : Enter image URL" 
                    type="text" />
                <button onClick={sendTweet} type="submit" className="tweetBox_button"><h3>Tweet</h3></button>
            </form>
        </div>
    )
}

export default TweetBox
