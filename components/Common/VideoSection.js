import React from "react";

const VideoSection = () => {
    return (
        <section className="pb-70 bg-gray">
            <div className="container custom-video-section">
                <div className="align-items-center col-lg-6 custom-video-section">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dLxkUnFmxHo"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullscreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
