import React from "react";

const VideoSection = () => {
    return (
        <section className="pb-70 bg-gray">
            <div className="container custom-video-section">
                <div className="row align-items-center col-lg-6 ">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/MTxRk1_1RUs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
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
