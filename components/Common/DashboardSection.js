import React from "react";
import Image from "next/image";
import DashboardImage from "../../images/dashboard.png";
import DashboardImage2 from "../../images/dashboard2.png";
import DashboardImage3 from "../../images/dashboard3.png";

const DashboardSection = () => {
    return (
        <>
            <section className="partner-area ptb-100 bg-black">
                <div className="container">
                    <div className="custom-section-title">
                        <h2 className="text-color-white">
                            Dashboards interativos e de fácil leitura
                        </h2>
                    </div>

                    <div className="row align-items-center col-lg-12">
                        <div className="custom-partner-item">
                            <Image
                                src={DashboardImage}
                                alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                className=""
                            />
                        </div>
                    </div>

                    <br/>

                    <div className="row align-items-center col-lg-12">
                        <div className="custom-partner-item">
                            <Image
                                src={DashboardImage2}
                                alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                className=""
                            />
                        </div>
                        <div className="custom-partner-item">
                            <Image
                                src={DashboardImage3}
                                alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                className=""
                            />
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default DashboardSection;
