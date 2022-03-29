import React from "react";
import Image from "next/image";
import GreenmotorTitle from "../../images/greenmotorWhiteTitle.png";

const InDevelopment = () => {
  return (
    <section className="partner-area ptb-100 bg-black">
      <div className="row align-items-center col-lg-12">
        <div className="custom-partner-item">
          <Image src={GreenmotorTitle} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="section-title">
          <h2 className="text-color-white">Em construção!</h2>
          <h2 className="text-color-white">contato@greenmotor.ai</h2>
        </div>
      </div>
    </section>
  );
};

export default InDevelopment;
