import React from "react";
import EmailIcon from "../svg/email";

const HeroForm = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="p-relative">
          <input type="text" placeholder="Masukkan Nomor Whatsapp Anda" />
         {/* email icon */}
         <EmailIcon />
        </div>
        <button className="tp-btn tp-btn-hover alt-color-black">
          <span>Get Pricelist</span>
          <b></b>
        </button>
      </form>
    </>
  );
};

export default HeroForm;
