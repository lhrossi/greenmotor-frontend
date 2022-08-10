import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class FunFacts extends Component {

    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render() {
        return (
            <>
                <section className="fun-facts-area ptb-100 bg-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                            >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 150
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>SKUs Analisados</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                                >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 95
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                        <span className="sign-icon">%</span>
                                    </h3>
                                    <p>Precisão da previsão de vendas</p>
                                </div>
                            </div>

                          
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default FunFacts;