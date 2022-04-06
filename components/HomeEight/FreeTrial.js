import React, { Component } from "react";
import Image from "next/image";
import WhiteLogoImage from "../../images/WhiteLogoTransparentBackground.png";

class FreeTrial extends Component {
  state = {
    submitting: false,
    submitted: false,
    buttonState: "",
    formFields: {
      email: "",
    },
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = this.state.formFields;
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : "";
      let formFields = Object.assign({}, this.state.formFields);
      this.setState({ formFields });
    });
  };

  emailChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.email = e.target.value;
    this.setState({ formFields });
  };

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
                <form className="newsletter-form" onSubmit={this.onSubmit}>
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Insira seu e-mail"
                    name="email"
                    value={this.state.formFields.email}
                    onChange={this.emailChangeHandler}
                  />
                  <button type="submit" className="button-white-background">
                    Marcar uma demonstração
                  </button>
                </form>
                <p className="help-text text-color-white">
                  Teste nossa Inteligência Artificial por 15 dias gratuitos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FreeTrial;
