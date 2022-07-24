import React from "react";

const VideoSection = () => {
    return (
        <section className="pb-70 bg-gray">
            <div className="container">
                <div className="row align-items-center col-lg-12">
                    <iframe
                        width="360"
                        height="460"
                        src="https://www.youtube.com/embed/MTxRk1_1RUs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullscreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
