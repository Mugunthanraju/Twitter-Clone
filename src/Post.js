import React, { forwardRef } from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/VerifiedUserRounded';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


const Post = forwardRef(
    ({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {
    return (
        <div className="post" ref={ref}>
           <div className="post_avatar">
              <Avatar src={avatar} /> 
           </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}{" "}<span className="post_headerSpecial">
                            {verified && <VerifiedIcon className="post_badge" />} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerInfo">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} />
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" className="makar"/>
                </div>
            </div>
        </div>
    );
}
);

export default Post
