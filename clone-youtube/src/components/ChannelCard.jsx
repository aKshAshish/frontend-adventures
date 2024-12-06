const ChannelCard = ({channel}) => {
    return (
        <div className="channel-card">
            <img className="channel-card-thumbnail" src={"https:" + channel?.thumbnail[1]?.url} alt="thumbnail" />
            <span style={{marginTop: "16px", color: "#e3e3e3"}}>
                {channel?.channelTitle}
                <span style={{color: "gray", marginLeft: "6px", fontSize: "16px"}} className="material-icons">check_circle</span>
            </span>
        </div>
    );
}

export default ChannelCard;