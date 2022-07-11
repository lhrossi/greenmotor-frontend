import React from "react";
import Image from "next/image";
import TecnopucLogo from "../../images/TecnopucLogo.png";

const TecnopucSection = () => {
    return (
        <>
            <section className="partner-area pt-80 bg-gray">
                <div className="container">
                    <div className="custom-section-title">
                        <h2 className="text-color-black">
                            Startup pertencente
                        </h2>
                    </div>

                    <div className="row align-items-center col-lg-12">
                        <div className="custom-partner-item">
                            <Image
                                src={TecnopucLogo}
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

export default TecnopucSection;
