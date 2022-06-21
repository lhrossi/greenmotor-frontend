import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedSolutions extends Component {
    render() {
        return (
            <section className="pt-100 pb-70 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2 className='text-color-black'>Nossos diferenciais</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card bg-black">
                                <i className='bx bxs-analyse'></i>
                                <h3 className=''>
                                    <Link href="/">
                                        <a>Extração de Dados</a>
                                    </Link>
                                </h3>
                                <p className='text-color-white'>Integramos com os seus sistemas de gestão empresarial e de estoque</p>
                                <Link href="/">
                                    <a className="read-more">Saber mais</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bx-shape-circle'></i>
                                <h3>
                                    <Link href="/">
                                        <a>Fácil Visualização</a>
                                    </Link>
                                </h3>
                                <p className='text-color-white'>Tenha insights mais rápidos com nossos dashboards personalizados</p>
                                <Link href="/">
                                    <a className="read-more">Saber mais</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bx-badge-check'></i>
                                <h3>
                                    <Link href="/">
                                        <a>Previsão de Vendas</a>
                                    </Link>
                                </h3>
                                <p className='text-color-white'>Tenha uma maior assertividade sobre quando e quanto comprar </p>
                                <Link href="/">
                                    <a className="read-more">Saber mais</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bx-layer'></i>
                                <h3>
                                    <Link href="/">
                                        <a>Modelos de IA sofisticados</a>
                                    </Link>
                                </h3>
                                <p className='text-color-white'>Aproveite cada informação já disponível nos seus sistemas</p>
                                <Link href="/">
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