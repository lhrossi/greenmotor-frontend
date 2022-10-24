import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '../../utils/ActiveLink';
import Image from 'next/image'
import LogoImage from '../../images/logo.png'

var phone = '555198668926';

class Navbar extends Component {

    // Sidebar Modal
    state = {
        sidebarModal: false
    };
    toggleModal = () => {
        this.setState({
        });
    }

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState(prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if (this.props.repphone) {
            phone = this.props.repphone;
          }
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area bg-black">
                    <div className="adani-nav bg-black">
                        <div className="container bg-black">
                            <nav className="navbar navbar-expand-md navbar-light bg-black">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <Image src={LogoImage} alt="Logo" />
                                        {/* {console.log(LogoImage)} */}
                                    </a>
                                </Link>

                                <button
                                    onClick={this.toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/sobre" activeClassName="active">
                                                <a className="nav-link">
                                                    Quem somos
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                                <a href={"https://api.whatsapp.com/send?phone="+phone+"&text=Ol%C3%A1!%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Greenmotor%3F"} target='_blank' className="nav-link">Contato</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(Navbar);

// export default Navbar;
