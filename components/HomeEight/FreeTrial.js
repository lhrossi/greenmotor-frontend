import React, { Component } from 'react';
import Image from 'next/image';
import FreeTrialImage from '../../images/machine-learning/free-trial-img.png';

class FreeTrial extends Component {
    render() {
        return (
            <section className="free-trial-area ptb-100 bg-f4f7fe">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="ft-img">
                                <Image src={FreeTrialImage} alt="Free trial image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="subscribe-content">
                                <span className="sub-title">Ficou com dúvidas?</span>
                                <h2>Agende uma demonstração gratuita</h2>
        
                                <form className="newsletter-form">
                                    <input type="email" className="input-newsletter" placeholder="Insira seu e-mail" name="email" />
                                    <button type="submit">Marcar uma demonstração</button>
                                </form>

                                <p className="help-text">Teste nossa Inteligência Artificial por 15 dias gratuitos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FreeTrial;