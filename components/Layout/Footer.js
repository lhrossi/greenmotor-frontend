import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <section className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contato</h3>
                                    <ul className="footer-contact-info">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <span>Ficou com alguma dúvida?</span>
                                            <a href="mailto:contato@greenmotor.ai">contato@greenmotor.ai</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-5">
                                    <h3>Acesso rápido</h3>
                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/#">
                                                <a>Quem Somos</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contato</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        Feito com 💖 por <a href="https://github.com/DericksonLossIT" target="_blank">Derickson Loss</a>
                                    </p>
                                    <p>
                                        Todos os direitos reservados a Greenmotor, {currentYear}
                                    </p>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="/terms-and-conditions">
                                                <a>Termos e Condições</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Política de Privacidade</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Footer;