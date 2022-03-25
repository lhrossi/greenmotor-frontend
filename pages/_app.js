import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';

import '../assets/css/style.css';
import '../assets/css/responsive.css';

import { Provider } from 'react-redux';
import App from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import FloatingWhatsApp from 'react-floating-whatsapp'


export default withRedux(initStore)(
    class MyApp extends App {

        // Preloader
        state = {
            loading: true
        };
        componentDidMount() {
            this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000);
        }
        componentWillUnmount() {
            if (this.timerHandle) {
                clearTimeout(this.timerHandle);
                this.timerHandle = 0;
            }
        }

        render() {
            const { Component, pageProps, store } = this.props

            return (
                <>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <title>Greenmotor AI</title>
                        <link rel="shortcut icon" type="image/png" href="/favicon.png"></link>
                    </Head>

                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>

                    {/* Preloader */}
                    <Loader loading={this.state.loading} />

                    {/* Go Top Button */}
                    {/* <GoTop scrollStepInPx="50" delayInMs="16.66" /> */}
                    <a href="https://api.whatsapp.com/send?phone=555198668926&text=Ol%C3%A1!%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Greenmotor%3F" className="float-wpp" target="_blank">
                        <i aria-hidden className="fa fa-whatsapp my-float-wpp"></i>
                    </a>
                </>
            );
        }
    }
)