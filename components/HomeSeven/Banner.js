import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardImage2 from "../../images/saas-banner/dashboard.png";
import BrainImage from "../../images/brain.png";

class Banner extends Component {
    state = {
        isOpen: false,
    };

    openModal = () => {
        this.setState({ isOpen: true });
    };

    render() {
        return (
            <>
                <div className="saas-banner-two">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container mt-50">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="banner-content">
                                            <h1 className="main-banner-title-color">
                                                Menos desperdício de alimentos,
                                                mais lucros aos supermercados
                                            </h1>
                                            <p className="main-banner-title-color">
                                                Utilizando os dados que seu
                                                mercado já tem, utilizamos nossa
                                                Inteligência Artificial para{" "}
                                                <b>otimizar seu estoque</b>,{" "}
                                                <b>diminuir o desperdício</b> de
                                                alimentos e fazer o seu cliente
                                                ter um{" "}
                                                <b>produto mais fresco</b>,
                                                enquanto{" "}
                                                <b>
                                                    aumentamos o retorno do seu
                                                    investimento.
                                                </b>
                                            </p>

                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="banner-btn">
                                                        <Link href="https://api.whatsapp.com/send?phone=555198668926&text=Gostaria%20de%20fazer%20o%20teste%20gr%C3%A1tis%20da%20Greenmotor!">
                                                            <a className="default-btn-two">
                                                                Teste 15 Dias
                                                                Grátis{" "}
                                                                <span></span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="banner-btn custom-banner-btn">
                                                            <a href="#DashboardSection" className="custom-default-btn-2">
                                                                Nosso Produto
                                                                <span></span>
                                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="saas-banner-image animate-tb">
                                            <Image
                                                src={BrainImage}
                                                alt="Dashboard"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Banner;
