import React, { Component } from "react";
import Image from "next/image";
import BlackLogoImage from "../../images/BlackLogoTransparentBackground.png";
import WhiteLogoImage from "../../images/WhiteLogoTransparentBackground.png";

class FreeTrial extends Component {
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
              <div className="subscribe-content">
                <h2 className="text-color-white">
                  Agende uma demonstração gratuita
                </h2>
                <form className="newsletter-form">
                  <button type="submit" className="custom-demo-button">
                    Marcar uma demonstração
                  </button>
                  {/* <br />     */}
                  {/* <br /> */}
                  <p className="help-text text-color-white text-padding-top">
                    Teste nossa Inteligência Artificial por 15 dias gratuitos.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FreeTrial;
