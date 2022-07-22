import React from "react";
import Image from "next/image";
import TecnopucLogo from "../../images/TecnopucLogo.png";
import AmchamLogo from "../../images/amchamLogo.png";
import WowLogo from "../../images/wowLogo.png";
import SebraeCapitalLogo from "../../images/sebraeCapitalLogo.png";

const TecnopucSection = () => {
    return (
        <>
            <section className="partner-area ptb-80 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="align-items-center col-lg-3 col-sm-6">
                            <div className="custom-partner-item">
                                <div className="custom-section-title">
                                    <h2 className="text-color-black">
                                        Startup pertencente
                                    </h2>
                                </div>
                                <div className="custom-partner-item">
                                    <Image
                                        src={TecnopucLogo}
                                        alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="align-items-center col-lg-3 col-sm-6">
                            <div className="custom-partner-item">
                                <div className="custom-section-title">
                                    <h2 className="text-color-black">
                                        Participante <br /><br />
                                    </h2>
                                </div>
                                <div className="custom-partner-item">
                                    <Image
                                        src={AmchamLogo}
                                        alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="align-items-center col-lg-3 col-sm-6">
                            <div className="custom-partner-item">
                                <div className="custom-section-title">
                                    <h2 className="text-color-black">
                                        Finalista <br /><br />
                                        {``}
                                    </h2>
                                </div>
                                <div className="custom-partner-item">
                                    <Image
                                        src={WowLogo}
                                        alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="align-items-center col-lg-3 col-sm-6">
                            <div className="custom-partner-item">
                                <div className="custom-section-title">
                                    <h2 className="text-color-black">
                                        Startup pertencente
                                    </h2>
                                </div>
                                <div className="custom-partner-item">
                                    <Image
                                        src={SebraeCapitalLogo}
                                        alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TecnopucSection;
