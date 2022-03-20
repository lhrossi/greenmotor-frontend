import React, { Component } from 'react';
import Link from 'next/link';

class Clients extends Component {
    render() {
        return (
            <>
                <section className="partner-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Nossos parceiros</h2>
                            <p>Supermercados que já estão utilizando nossa tecnologia para redução de desperdícios.</p>
                        </div>

                        <div className="row align-items-center col-lg-12">
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img1.png" alt="image" />
                                    <img src="/images/partner-image/partner-img1.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img2.png" alt="image" />
                                    <img src="/images/partner-image/partner-img2.png" alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Clients;