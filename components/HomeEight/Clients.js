import React, { Component } from 'react';
import Link from 'next/link';

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
                                    <img src="/images/mercadoDiaLogo.png" alt="image" />
                                    <img src="/images/mercadoDiaLogo.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="https://magmaxx.com.br/" target="_blank">
                                    <img src="/images/mercadoMagmaxxLogo.png" alt="image" />
                                    <img src="/images/mercadoMagmaxxLogo.png" alt="image" />
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