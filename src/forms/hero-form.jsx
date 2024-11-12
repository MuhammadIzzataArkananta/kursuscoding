import React, { useState } from "react";
import EmailIcon from "../svg/email";

const HeroForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const validatePhoneNumber = (number) => {
    const cleanedNumber = number.replace(/\D/g, "");

    return /^(62|0)\d{9,12}$/.test(cleanedNumber)
  }

  const handleWhatsappRedirect = () => {
    if (validatePhoneNumber(phoneNumber)) {
      const formattedNumber = phoneNumber.replace(/^0/, "62"); 
      const url = `https://api.whatsapp.com/send?phone=6288228149133&text=Halo%20Mars%20Coding%2C%20Saya%20minta%20pricelist%20kursus%20coding`;

      console.log(formattedNumber);
      window.open(url, "_blank")
    } else {
      alert("Mohon masukkan nomor WA yang valid.");
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="p-relative">
          <input
            type="text"
            placeholder="Nomor WA, Contoh: 08123456789"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {/* email icon */}
          <EmailIcon />
        </div>
        <button
          type="button"
          className="tp-btn tp-btn-hover alt-color-black"
          onClick={handleWhatsappRedirect}
        >
          <span>Get Pricelist</span>
          <b></b>
        </button>
      </form>
    </>
  );
};

export default HeroForm;