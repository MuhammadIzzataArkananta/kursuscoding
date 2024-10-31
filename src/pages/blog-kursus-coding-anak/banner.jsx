import React from 'react';
import Image from 'next/image';
import brand_img from "../../../public/assets/img/blog/blog-details-1.jpg";


const Banner = ({blogImage}) => {
   if (!blogImage) return null
   const thumbImage = blogImage.acf.thumb_image
    return (
        <>
           <div className="blog-details-img-area mb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="blog-details-big-img z-index-2" style={{ width:'100%', height: '600px', objectFit:'cover'}}>
                        <Image src={thumbImage} fill alt="theme-pure" />
                     </div>
                  </div>
               </div>
            </div>
         </div> 
        </>
    );
};

export default Banner;