import { Avatar } from '@material-ui/core'
import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import './posts.css'

function Posts({profilePic,image,username,timestamp,message}) {
    return (
        <div className="posts">
        <div className="post_top">
        <Avatar src={profilePic} className="post_avatar"/>
        
        <div className="post_topInfo">
            <h3 >{username}</h3>
            <p>{new Date (timestamp?.toDate()).toUTCString()}</p>
        </div>
        </div>
        <div className="posts_bottom">
            <p>{message}</p>
        </div>
        <div className="posts_image">
            <img src={image} alt=""/>
        </div>
        <div className="posts_options">
        <div className="posts_icons">
            <ThumbUpIcon/>
            <p>Like</p>
        </div>
        <div className="posts_icons">
            <ChatBubbleOutlineIcon/>
            <p>Comment</p>
        </div>
        <div className="posts_icons">
            <NearMeIcon/>
            <p>Share</p>
        </div>
        <div className="posts_icons">
            <AccountCircleIcon/>
            <ExpandMoreOutlined/>
            <p>More</p>
        </div>
        </div>
            
        </div>
    )
}

export default Posts
