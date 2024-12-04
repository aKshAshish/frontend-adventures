import React from "react";

import Sidebar from './Sidebar';

const Feed = () => {
    return (
        <div id="feed">
            <div class="sidebar-container">
                <Sidebar />
                <p className="copyright">
                    Copyright © 2022 YT Media
                </p>
            </div>
            <div class="video-container" style={{fontWeight: 600, color: "#FFF"}}>
                <h1>
                    New <span style={{color: "#FC1503"}}>videos</span>
                </h1>
            </div>
        </div>
    );
}

export default Feed;