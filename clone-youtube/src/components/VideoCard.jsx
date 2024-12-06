import React, { useState } from "react";
import placeholder from '../assets/placeholder.png';

const VideoCard = ({video}) => {

    return (
        <div className="video-card">
            <img className="video-card-thumbnail" src={video?.thumbnail[0]?.url} alt="thumbnail" onError={(event) => {event.currentTarget.src = placeholder}}/>
            <div className="video-card-detail">
                <img style={{borderRadius: "18px", width: "36px", height: "36px", marginRight: "16px"}} src={video?.channelThumbnail[0]?.url} alt="channel-thumbnail" />
                <div>
                    <span style={{whiteSpace: "normal", maxWidth: "100%"}}>{video?.title}</span>
                    <div style={{color: "lightgray", fontSize: "0.8em", lineHeight: "1.5em", fontWeight: "400", marginTop: "8px", display: "flex", flexDirection: "column"}}>
                        <span>{video?.channelTitle}</span>
                        <span>{video?.viewCount} views <span style={{fontWeight: "600", fontSize: "1em"}}>&#183;</span> {video?.publishedText}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;