import { VideoCard, ChannelCard } from ".";

const Videos = ({videos}) => {
    return (
        <div id="videos">
            {
                videos.map((item) => {
                    return item.type === "channel" ? 
                        <ChannelCard key={item.channelId} channel={item} /> : 
                        <VideoCard key={item.videoId} video={item} />; 
                })
            }
        </div>
    );
}

export default Videos;