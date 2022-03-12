import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import VisibilitySensor from "react-visibility-sensor";
const OwlCarousel = dynamic(import('react-owl-carousel3'));
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Image from 'next/image';
import Shape2 from '../../images/shape/shape2.svg';
import Shape3 from '../../images/shape/shape3.svg';
import Shape4 from '../../images/shape/shape4.png';
import Shape5 from '../../images/shape/shape5.png';
import Shape6 from '../../images/shape/shape6.png';
import Shape7 from '../../images/shape/shape7.png';
import Shape8 from '../../images/shape/shape8.png';
import Shape9 from '../../images/shape/shape9.png';
import Shape10 from '../../images/shape/shape10.png';

const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    margin: 0,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
}

class BannerSlider extends Component {

    _isMounted = false;
    state = {
        display: false
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ display: true })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    // Open Popup Modal
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({ isOpen: true })
    };

    render() {
        return (
            <>
                {/* If you want change the video need to update below videoID */}
                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='szuchBiLrEM'
                    onClose={() => this.setState({ isOpen: false })}
                />

                {this.state.display ? <OwlCarousel
                    className="machine-learning-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="machine-learning-banner ml-bg1 jarallax">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container mt-80">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <VisibilitySensor>
                                                {({ isVisible }) => (
                                                    <div className="banner-content">
                                                        <h1
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                            World’s Leading AI & Machine Learning Company
                                                        </h1>

                                                        <p
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                            ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.
                                                        </p>

                                                        <div
                                                            className={
                                                                `banner-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            <Link href="/contact">
                                                                <a className="default-btn mr-4">
                                                                    Get Started <span></span>
                                                                </a>
                                                            </Link>

                                                            <Link href="/index8">
                                                                <a className="default-btn-two">
                                                                    Try It Free <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </div>

                                        <div className="col-lg-5">
                                            <div className="ml-video">
                                                <div className="solution-video">
                                                    <div
                                                        onClick={e => { e.preventDefault(); this.openModal() }}
                                                        className="video-btn popup-youtube"
                                                    >
                                                        <i className="flaticon-play-button"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shape Images */}
                        <div className="shape-img2">
                            <Image src={Shape2} alt="" />
                        </div>
                        <div className="shape-img3">
                            <Image src={Shape3} alt="" />
                        </div>
                        <div className="shape-img4">
                            <Image src={Shape4} alt="" />
                        </div>
                        <div className="shape-img5">
                            <Image src={Shape5} alt="" />
                        </div>
                        <div className="shape-img6">
                            <Image src={Shape6} alt="" />
                        </div>
                        <div className="shape-img7">
                            <Image src={Shape7} alt="" />
                        </div>
                        <div className="shape-img8">
                            <Image src={Shape8} alt="" />
                        </div>
                        <div className="shape-img9">
                            <Image src={Shape9} alt="" />
                        </div>
                        <div className="shape-img10">
                            <Image src={Shape10} alt="" />
                        </div>
                    </div>

                    <div className="machine-learning-banner ml-bg2 jarallax">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container mt-80">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <VisibilitySensor>
                                                {({ isVisible }) => (
                                                    <div className="banner-content">
                                                        <h1
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                            Machine Learning Models For Business Process
                                                        </h1>
                                                        <p
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                            ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.
                                                        </p>

                                                        <div
                                                            className={
                                                                `banner-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            <Link href="/contact">
                                                                <a className="default-btn mr-4">
                                                                    Get Started <span></span>
                                                                </a>
                                                            </Link>

                                                            <Link href="/index8">
                                                                <a className="default-btn-two">
                                                                    Try It Free <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </div>

                                        <div className="col-lg-5">
                                            <div className="ml-video">
                                                <div className="solution-video">
                                                    <div
                                                        onClick={e => { e.preventDefault(); this.openModal() }}
                                                        className="video-btn popup-youtube"
                                                    >
                                                        <i className="flaticon-play-button"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shape Images */}
                        <div className="shape-img2">
                            <Image src={Shape2} alt="" />
                        </div>
                        <div className="shape-img3">
                            <Image src={Shape3} alt="" />
                        </div>
                        <div className="shape-img4">
                            <Image src={Shape4} alt="" />
                        </div>
                        <div className="shape-img5">
                            <Image src={Shape5} alt="" />
                        </div>
                        <div className="shape-img6">
                            <Image src={Shape6} alt="" />
                        </div>
                        <div className="shape-img7">
                            <Image src={Shape7} alt="" />
                        </div>
                        <div className="shape-img8">
                            <Image src={Shape8} alt="" />
                        </div>
                        <div className="shape-img9">
                            <Image src={Shape9} alt="" />
                        </div>
                        <div className="shape-img10">
                            <Image src={Shape10} alt="" />
                        </div>
                    </div>

                    <div className="machine-learning-banner ml-bg3 jarallax">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container mt-80">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <VisibilitySensor>
                                                {({ isVisible }) => (
                                                    <div className="banner-content">
                                                        <h1
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                            Use Machine Learning To Augment Your Business Process
                                                        </h1>
                                                        <p
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                            ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.
                                                        </p>

                                                        <div
                                                            className={
                                                                `banner-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            <Link href="/contact">
                                                                <a className="default-btn mr-4">
                                                                    Get Started <span></span>
                                                                </a>
                                                            </Link>

                                                            <Link href="/index8">
                                                                <a className="default-btn-two">
                                                                    Try It Free <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </div>

                                        <div className="col-lg-5">
                                            <div className="ml-video">
                                                <div className="solution-video">
                                                    <div
                                                        onClick={e => { e.preventDefault(); this.openModal() }}
                                                        className="video-btn popup-youtube"
                                                    >
                                                        <i className="flaticon-play-button"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shape Images */}
                        <div className="shape-img2">
                            <Image src={Shape2} alt="" />
                        </div>
                        <div className="shape-img3">
                            <Image src={Shape3} alt="" />
                        </div>
                        <div className="shape-img4">
                            <Image src={Shape4} alt="" />
                        </div>
                        <div className="shape-img5">
                            <Image src={Shape5} alt="" />
                        </div>
                        <div className="shape-img6">
                            <Image src={Shape6} alt="" />
                        </div>
                        <div className="shape-img7">
                            <Image src={Shape7} alt="" />
                        </div>
                        <div className="shape-img8">
                            <Image src={Shape8} alt="" />
                        </div>
                        <div className="shape-img9">
                            <Image src={Shape9} alt="" />
                        </div>
                        <div className="shape-img10">
                            <Image src={Shape10} alt="" />
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </>
        );
    }
}

export default BannerSlider;