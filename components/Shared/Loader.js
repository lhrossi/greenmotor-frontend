import Image from "next/image";
import React, { Component } from "react";
import GreenmotorWhiteLogoLoader from "../../images/loader.png";

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
            src={GreenmotorWhiteLogoLoader}
            className="custom-loader-image preloader-shrink-icon rotate"
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
