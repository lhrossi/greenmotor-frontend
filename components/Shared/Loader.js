import React, { Component } from 'react';
import WhiteLogoImage from '../../images/WhiteLogoTransparentBackground.png';
import Image from 'next/image';

class Loader extends Component {
    render() {
        return (
            <>
                <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
                    <div className="loader">
                        <div className="shadow"></div>
                        <div className="preloader-logo rotate">
                                <Image src={WhiteLogoImage} alt="Free trial image" />
                            </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Loader;