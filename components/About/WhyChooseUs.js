import Image from 'next/image';
import React, { Component } from 'react';
import BlackLogoImage from '../../images/BlackLogoTransparentBackground.png';


class WhyChooseUs extends Component {
    render() {
        return (
            <>
                <section className="why-choose-area ptb-100 bg-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <br />
                                <br />
                                <br />
                                <div className="why-choose-content">
                                    <h2>A Plataforma digital que elimina o desperdício de alimentos perecíveis de forma inteligente.</h2>
                                    <br />
                                    <br />
                                    <p>A Greenmotor é uma plataforma de previsão automatizada de IA altamente precisa, trazendo resultados assertivos de  previsão de vendas, estoque ideal, proposta de compras e pricing para o segmento dos supermercados.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <br />
                                <br />
                                <br />
                                <div className="why-choose-image rotate">
                                    <Image src={BlackLogoImage} alt="Logo greenmotor girando" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WhyChooseUs;