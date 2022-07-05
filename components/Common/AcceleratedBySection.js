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
                                <Image
                                    src={oraclePhoto}
                                    alt="Logo da Oracle for Startups"
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="custom-partner-item">
                                <Image
                                    src={naviPhoto}
                                    alt="Logo do Hub NAVI"
                                    className=""
                                />
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="custom-partner-item">
                                <Image
                                    src={banritechPhoto}
                                    alt="Logo do Banritech"
                                    className=""
                                />
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="custom-partner-item">
                                <Image
                                    src={inovativaPhoto}
                                    alt="Logo da Inovativa Brasil"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AcceleratedBySection;
