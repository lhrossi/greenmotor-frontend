import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

class Clients extends Component {
    render() {
        return (
            <>
                <section className="partner-area ptb-100 bg-black">
                    <div className="container">
                        <div className="section-title">
                            <h2 className='text-color-white'>Nossos parceiros</h2>
                            <p className='text-color-white'>Supermercados que já estão utilizando nossa tecnologia para redução de desperdícios.</p>
                        </div>

                        <div className="row align-items-center col-lg-12">
                            <div className="single-partner-item">
                                <a href="https://www.dia.com.br/" target="_blank">
                                    <Image src={`/images/mercadoDiaLogo.png`} alt="Mercado Dia Logo" />
                                    <Image src={`/images/mercadoDiaLogo.png`} alt="Mercado Dia Logo" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="https://magmaxx.com.br/" target="_blank">
                                    <Image src={`/images/mercadoMagmaxxLogo.png`} alt="Mercado Magmaxx Logo" />
                                    <Image src={`/images/mercadoMagmaxxLogo.png`} alt="Mercado Magmaxx Logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Clients;