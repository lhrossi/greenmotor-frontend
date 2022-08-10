import React from "react";
import Image from "next/image";


const AmchamSection = () => {
    return (
        <>
            <section className="partner-area pb-70 bg-gray">
                <div className="container">
                    <div className="row align-items-center col-lg-12">
                        <div className="custom-partner-item">
                            <div className="custom-section-title">
                                <h2 className="text-color-black">
                                    Participante
                                </h2>
                            </div>
                            <Image
                                src={AmchamLogo}
                                alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                className=""
                            />
                        </div>
                        <div className="custom-partner-item">
                            <div className="custom-section-title">
                                <h2 className="text-color-black">Finalista</h2>
                            </div>
                            <Image
                                src={WowLogo}
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

export default AmchamSection;
