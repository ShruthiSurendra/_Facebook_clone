import React from 'react'
import './story.css'
import {Avatar} from '@material-ui/core'

const Story=({imges,profileSrc,title})=> {
    return (
        <div   style={{backgroundImage: `url(${imges})` }}
        className="story">
        <Avatar className="story_avatar" src={profileSrc}/>
        
        <h4>{title}</h4>
            
        </div>
    )
}

export default Story
