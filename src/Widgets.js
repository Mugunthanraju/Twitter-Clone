import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_SearchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
                <div className="widgets_widgetContainer">
                    <h2>What's Happening</h2>

                    <TwitterTweetEmbed tweetId={"1298781263675846662"} />
                    <hr></hr>
                    <TwitterTweetEmbed tweetId={"1305478535360978944"} />
                    
                    
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="Amazon"
                        options={{ height: 400 }}
                    />

                    <TwitterShareButton
                        url={"https://www.instagram.com/mugunthan_raju?igshid=varwohwlc4fg"}
                        options={{ text: "#reactjs is awesome", via: "Mugunthan" }}
                    />
                    



                </div>

        </div>
    )
}

export default Widgets
