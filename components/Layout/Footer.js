import React, { Component } from 'react';
import Link from 'next/link';

var phone = '555198668926';

class Footer extends Component {
    
    render() {
        if (this.props.repphone) {
            phone = this.props.repphone;
          }
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
                                            <a href={"https://api.whatsapp.com/send?phone="+phone+"&text=Ol%C3%A1!%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Greenmotor%3F"} target='_blank'>Contato</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        Todos os direitos reservados a Greenmotor, {currentYear}
                                    </p>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Termos e Condições</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
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