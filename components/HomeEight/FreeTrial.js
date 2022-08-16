import React, { Component } from 'react';
import Image from 'next/image';
import BlackLogoImage from '../../images/BlackLogoTransparentBackground.png';
import WhiteLogoImage from '../../images/WhiteLogoTransparentBackground.png';

var phone = '554792253159';

class FreeTrial extends Component {

    componentDidMount(){
        
        console.debug(this.phone);
        if (this.props.rep === 'bellitech') {
            phone = '554792253159';            
          }
    }
    
    render() {
        return (
            <section className="free-trial-area ptb-100 bg-black">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="ft-img rotate">
                                <Image src={WhiteLogoImage} alt="Free trial image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subscribe-content subscribe-content-custom">
                                <h2 className='text-color-white'>Agende uma demonstração gratuita</h2>
                                <a href={'https://api.whatsapp.com/send?phone=' + phone + '&text=Ol%C3%A1!%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Greenmotor%3F'} target='_blank' className='custom-free-trial-button button-white-background'>Marcar uma demonstração</a>
                                <span className="help-text text-color-white">Teste nossa Inteligência Artificial por 15 dias gratuitos.</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <a href={'https://api.whatsapp.com/send?phone=' + phone + '&text=Ol%C3%A1!%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Greenmotor%3F'} className="float-wpp" target="_blank">
                        <i aria-hidden className="fa fa-whatsapp my-float-wpp"></i>
                    </a>
            </section>
        );
    }
}

export default FreeTrial;