import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Feed, VideoDetail, ChannelDetail, SearchFeed, Navbar } from "./components";

const App = () => (
    <BrowserRouter>
        <div id="main">
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default App;