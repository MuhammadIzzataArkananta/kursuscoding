import Image from 'next/image';
import React from 'react';


// brand img import here 
import brand_img_1 from "../../../public/assets/img/brand/pj-logo.webp"
import brand_img_2 from "../../../public/assets/img/brand/smenda-logo.webp"
import brand_img_3 from "../../../public/assets/img/brand/musasi-logo.webp"
import brand_img_4 from "../../../public/assets/img/brand/mbs-logo.webp"
import brand_img_5 from "../../../public/assets/img/brand/antartika2-logo.webp"
import brand_img_6 from "../../../public/assets/img/brand/alfatih-logo.webp"
import brand_img_7 from "../../../public/assets/img/brand/bumiS-logo.webp"
import brand_img_8 from "../../../public/assets/img/brand/sabil-logo.webp"
import brand_img_9 from "../../../public/assets/img/brand/wachidH-logo.webp"
import brand_img_10 from "../../../public/assets/img/brand/telkomSda-logo.webp"

const brand_content = {
  titel: "Dipercaya oleh Instansi Pendidikan Ternama",
  description: <>Lebih dari 10+ instansi pendidikan percaya dan memilih Mars Coding</>,
    
    brand_img: [
        {img: brand_img_1, delay: ".2s"},
        {img: brand_img_2, delay: ".4s"},
        {img: brand_img_3, delay: ".6s"},
        {img: brand_img_4, delay: ".8s"},
        {img: brand_img_5, delay: ".9s"},
        {img: brand_img_6, delay: "1s"},
        {img: brand_img_7, delay: "1.1s"},
        {img: brand_img_8, delay: "1.2s"},
        {img: brand_img_9, delay: "1.3s"},
        {img: brand_img_10, delay: "1.4s"},

    ]
}
const {titel, description, brand_img}  = brand_content 


const Brand = () => {
    return (
      <>
        <div className="ab-brand-area">
          <div className="container">
            <div className="ab-brand-border-bottom pb-90">
              <div className="row">
                <div className="col-12">
                  <div className="ab-brand-section-box text-center mb-50">
                    <h4 className="ab-brand-title">{titel}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
                    {brand_img.map((item, i) => (
                      <div
                        key={i}
                        className="col wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay={item.delay}
                      >
                        <div className="ab-brand-item mb-25">
                          <Image src={item.img} alt="theme-pure"  style={{maxHeight: "85px", minHeight: "85px", objectFit: "contain"}} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Brand;