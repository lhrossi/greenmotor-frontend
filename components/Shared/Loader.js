import Image from "next/image";
import React, { Component } from "react";
import GreenmotorWhiteLogo from "../../images/WhiteLogoTransparentBackground.png";

class Loader extends Component {
  render() {
    return (
      <>
        <div
          className={`preloader custom-loader-image ${
            this.props.loading ? "" : "preloader-deactivate"
          }`}
        >
          <Image
            priority
            src={GreenmotorWhiteLogo}
            className="custom-loader-image rotate"
          />
          {/* <div className="loader">
                        <div className="shadow"></div>
                        <div className="box"></div>
                    </div> */}
        </div>
      </>
    );
  }
}

export default Loader;
