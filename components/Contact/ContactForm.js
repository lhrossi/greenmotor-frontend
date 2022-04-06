import React from 'react'
import 'isomorphic-fetch'
import Image from 'next/image';
import WhiteLogoImage from '../../images/WhiteLogoTransparentBackground.png';

export default class ContactForm extends React.Component {

    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            subject: '',
            phone: '',
            text: ''
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            res.status === 200 ? this.setState({ submitted: true }) : ''
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.subject = '';
            formFields.text = '';
            this.setState({formFields});
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({formFields});
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({formFields});
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({formFields});
    }

    subjectChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.subject = e.target.value;
        this.setState({formFields});
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({formFields});
    }

    onHideSuccess = () => {
        this.setState({submitted: false});
    }

    successMessage = () => {
        if (this.state.submitted){
            return (
                <div className="alert alert-success alert-dismissible mt-4">
                    <strong>Obrigado!</strong> Já recebemos a sua mensagem!
                    <button onClick={this.onHideSuccess} type="button" className="btn-close"></button>
                </div>
            );
        }
    }

    render() {
        return (
            <>
                <section className="contact-area ptb-100 bg-black">
                    <div className="container">
                        <div className="section-title">
                            <br />
                            <br />
                            <br />
                            <h2 className='main-banner-title-color'>Entre em contato conosco.</h2>
                            <p className='main-banner-title-color'>Vamos lhe responder o mais rápido possível!</p>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="contact-image rotate">
                                    <Image src={WhiteLogoImage} alt="Greenmotor logo" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="contact-form">
                                    <form 
                                        id="contactForm" 
                                        onSubmit={this.onSubmit}
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="name"
                                                        className="form-control" 
                                                        placeholder="Nome" 
                                                        required
                                                        value={this.state.formFields.name}
                                                        onChange={this.nameChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="email" 
                                                        name="email"
                                                        className="form-control" 
                                                        required 
                                                        placeholder="Email" 
                                                        value={this.state.formFields.email}
                                                        onChange={this.emailChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="text"
                                                        name="phone" 
                                                        className="form-control" 
                                                        placeholder="Telefone" 
                                                        required
                                                        value={this.state.formFields.phone}
                                                        onChange={this.phoneChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="subject"
                                                        className="form-control" 
                                                        placeholder="Assunto" 
                                                        required
                                                        value={this.state.formFields.subject}
                                                        onChange={this.subjectChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea 
                                                        name="message" 
                                                        className="form-control" 
                                                        id="message" 
                                                        cols="30" 
                                                        rows="5" 
                                                        required 
                                                        placeholder="Sua mensagem" 
                                                        value={this.state.formFields.text}
                                                        onChange={this.textChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 text-center">
                                                <button type="submit" className="default-btn">
                                                    Enviar Mensagem <span></span>
                                                </button>
                                            </div>
                                        </div>

                                        {this.successMessage()}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
