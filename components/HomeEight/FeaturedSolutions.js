import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedSolutions extends Component {
    render() {
        return (
            <section className="pt-100 pb-70 bg-black">
                <div className="container">
                    <div className="custom-section-title">
                        <h2 className='text-color-white'>Nossos diferenciais</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                    </div>

                    <div className="pt-70 row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card bg-black">
                                <i className='bx bxs-analyse'></i>
                                <h3 className=''>
                                    <Link href="/">
                                        <span>Extração de Dados</span>
                                    </Link>
                                </h3>
                                <p className='text-color-white'>Integramos com os seus sistemas de gestão empresarial e de estoque</p>
                                
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bx-shape-circle'></i>
                                <h3>
                                    <Link href="/">
                                        <span>Fácil Visualização</span>
                                    </Link>
                                </h3>
                                <p className='text-color-white'>Tenha insights mais rápidos com nossos dashboards personalizados</p>
                               
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bx-badge-check'></i>
                                <h3>
                                    <Link href="/">
                                        <span>Previsão de Vendas</span>
                                    </Link>
                                </h3>
                                <p className='text-color-white'>Tenha uma maior assertividade sobre quando e quanto comprar </p>
                                
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="featured-solution-card">
                                <i className='bx bx-layer'></i>
                                <h3>
                                    <Link href="/">
                                        <span>Modelos de IA sofisticados</span>
                                    </Link>
                                </h3>
                                <p className='text-color-white'>Aproveite cada informação já disponível nos seus sistemas</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedSolutions;