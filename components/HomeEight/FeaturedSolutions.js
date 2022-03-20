import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedSolutions extends Component {
    render() {
        return (
            <section className="pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Nossos diferenciais</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bxs-analyse'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Extração de Dados</a>
                                    </Link>
                                </h3>
                                <p>Integramos com os seus sistemas de gestão empresarial e de estoque</p>
                                <Link href="/service-details">
                                    <a className="read-more">Saber mais</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bx-shape-circle'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Fácil Visualização</a>
                                    </Link>
                                </h3>
                                <p>Tenha insights mais rápido com nossos dashboards personalizados</p>
                                <Link href="/service-details">
                                    <a className="read-more">Saber mais</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bx-badge-check'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Previsão de Vendas</a>
                                    </Link>
                                </h3>
                                <p>Tenha uma maior assertividade sobre quando e quanto comprar </p>
                                <Link href="/service-details">
                                    <a className="read-more">Saber mais</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bx-layer'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Modelos de IA sofisticados</a>
                                    </Link>
                                </h3>
                                <p>Aproveite cada informação já disponível nos seus sistemas</p>
                                <Link href="/service-details">
                                    <a className="read-more">Saber mais</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedSolutions;