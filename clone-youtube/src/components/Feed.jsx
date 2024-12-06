import { useState, useEffect } from "react";

import Sidebar from './Sidebar';
import { DEFAULT_SELECTED_CATEGORY } from "../utils/constants";
import { getVideosFromAPI } from "../utils/fetchFromApi";
import Videos from './Videos';
import { mockVideos } from "../utils/mockData";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState(DEFAULT_SELECTED_CATEGORY);
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        getVideosFromAPI(`search?query=${selectedCategory}`).then((res) => {
            console.log(res);
            setVideos(res.data);
        });
        // setVideos(mockVideos);
    }, [selectedCategory])

    return (
        <div id="feed">
            <div className="sidebar-container">
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <p className="copyright">
                    Copyright © 2022 YT Media
                </p>
            </div>
            <div className="video-container" style={{fontWeight: 600, color: "#FFF"}}>
                <h1>
                    {selectedCategory} <span style={{color: "#FC1503"}}>videos</span>
                </h1>
                <Videos videos={videos}/>
            </div>
        </div>
    );
}

export default Feed;