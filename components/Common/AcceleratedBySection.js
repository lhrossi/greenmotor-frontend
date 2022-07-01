import React from "react";
import Link from "next/link";
import Image from "next/image";
import naviPhoto from "../../images/naviPhoto.png";
import oraclePhoto from "../../images/oraclePhoto.png";
import banritechPhoto from "../../images/banritechPhoto.png";
import inovativaPhoto from "../../images/inovativaPhoto.png";

const AcceleratedBySection = () => {
    return (
        <>
            <section className="pt-100 pb-70 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2 className="text-color-black">
                            Startup acelerada por
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="custom-partner-item">
                                <a
                                    href="https://www.navi.com.ai/"
                                    target="_blank"
                                >
                                    <Image
                                        src={naviPhoto}
                                        alt="Logo do Hub NAVI"
                                        className=""
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6"><div className="custom-partner-item">
                                <a
                                    href="https://www.oracle.com/br/startup/"
                                    target="_blank"
                                >
                                    <Image
                                        src={oraclePhoto}
                                        alt="Logo da Oracle for Startups"
                                        className=""
                                    />
                                </a>
                            </div></div>

                        <div className="col-lg-3 col-sm-6"><div className="custom-partner-item">
                                <a
                                    href="https://promo.banrisul.com.br/bdg/link/banritech.html"
                                    target="_blank"
                                >
                                    <Image
                                        src={banritechPhoto}
                                        alt="Logo do Banritech"
                                        className=""
                                    />
                                </a>
                            </div></div>

                        <div className="col-lg-3 col-sm-6"><div className="custom-partner-item">
                                <a
                                    href="https://www.inovativa.online/"
                                    target="_blank"
                                >
                                    <Image
                                        src={inovativaPhoto}
                                        alt="Logo da Inovativa Brasil"
                                        className=""
                                    />
                                </a>
                            </div></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AcceleratedBySection;
