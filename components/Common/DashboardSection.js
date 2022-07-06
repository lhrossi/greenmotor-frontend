import React from "react";
import Image from "next/image";
import DashboardImage2 from "../../images/saas-banner/dashboard.png";
import DashboardImageBlack from "../../images/macbookNewPhoto.png";

const DashboardSection = () => {
    return (
        <>
            <section className="partner-area ptb-100 bg-black">
                <div className="container">
                    <div className="section-title">
                        <h2 className="text-color-white">
                            Dashboards interativos e de fácil leitura
                        </h2>
                    </div>

                    <div className="row align-items-center col-lg-12">
                        <div className="custom-partner-item">
                            <Image
                                src={DashboardImageBlack}
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
