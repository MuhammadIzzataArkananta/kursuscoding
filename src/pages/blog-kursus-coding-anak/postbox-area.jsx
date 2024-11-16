import SocialLinks from '@/common/social-links';
import CommentPost from '@/forms/comment-post';
import DoubleSemicolon from '@/svg/double-semicolon';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Categories from '../../components/blog-list/categories';
import RecentPost from '../../components/blog-list/recent-post';
import Search from '../../components/blog-list/search';
import Tags from '../../components/blog-list/tags';
import Comments from './comments';


import blog_details_img_1 from "../../../public/assets/img/blog/blog-details-1.jpg";
import navigation_img_1 from "../../../public/assets/img/blog/navigation-1.png";
import navigation_img_2 from "../../../public/assets/img/blog/navigation-2.png";






const PostboxArea = ({ style_details_2, blog }) => {
   if (!blog) return null;

   const [toc, setToc] = useState("")
   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

   useEffect(() => {
      const contentElement = document.getElementById("content");
      if (contentElement) {
         const generatedToc = generateTOC(contentElement)
         setToc(generatedToc);
      }
   }, [blog])

   function generateTOC(contentElement) {
      
      const headings = contentElement.querySelectorAll("h1, h2, h3, h4, h5, h6");
      const tocList = [];

      headings.forEach((heading, index) => {
         let headingId = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');
         headingId = headingId || `heading-${index}`;

         let uniqueId = headingId
         let count = 1;

         while (document.getElementById(uniqueId)) {
            uniqueId = `${headingId}-${count}`;
            count++;
         }
         heading.id = uniqueId
         

         tocList.push(
            <li key={uniqueId} style={{ marginLeft: `${(parseInt(heading.tagName[1]) - 1) * 20}px` }}>
               <a href={`#${uniqueId}`}>{heading.textContent}</a>
            </li>
         )
      })
      return <ul>{tocList}</ul>;
   }
   

   return (
      <>
         <div className={`postbox__area ${style_details_2 && "pt-100"} pb-100`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__details-wrapper pr-20">
                        <article>
                           {style_details_2 &&
                              <div className="postbox__thumb w-img">
                                 <Link href="/blog-details">
                                    <Image src={blog_details_img_1} alt="" />
                                 </Link>
                              </div>
                           }
                           <div className="postbox__details-title-box pb-30">
                              <h1 className="postbox__details-title">{blog.acf.news_title}</h1>
                              <div style={{ 
                                         fontSize: "16px",
                                         lineHeight: "2",
                                         color: "#8f0f0f",
                                         backgroundColor: "#f5ebeb",
                                         padding: "10px",
                                         borderRadius: "5px" }}>
                                    <button onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
                                          {isDropdownVisible ? "Sembunyikan Daftar Isi" : "Tampilkan Daftar Isi"}
                                    </button>
                                          {isDropdownVisible && <div className="toc">{toc}</div>}
                              </div>

                              <br />
                              <div id='content' dangerouslySetInnerHTML={{ __html: blog.acf.content }}></div>

                           </div>
                           {/* <div className="postbox__details-checkmark">
                              <ul>
                                {checkmark_list.map((item, i)  => <li key={i}><i className="fal fa-check"></i>{item}</li>)} 
                              </ul>
                           </div> */}
                           {/* <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_2}</h4>
                              <p>{des_3}</p>
                           </div>
                           <div className="postbox__details-img-box d-flex">
                              <div className="mr-20 text-center">
                                 <Image className="mb-20" src={blog_details_img_2} alt="theme-pure" />
                                 <h4 className="postbox__details-img-caption"><span>Images by</span>@sample</h4>
                              </div>
                              <div className="text-center">
                                 <Image className="mb-20" src={blog_details_img_3} alt="theme-pure" />
                                 <h5 className="postbox__details-img-caption"><span>Images by</span>@sample</h5>
                              </div>
                           </div> */}
                           {/* <div className="postbox__details-title-box pb-15">
                              <p>{des_4}</p>
                           </div>
                           <div className="postbox__details-qoute mb-30">
                              <blockquote className="d-flex align-items-start">
                                 <div className="postbox__details-qoute-icon">
                                    <DoubleSemicolon /> 
                                 </div>
                                 <div className="postbox__details-qoute-text">
                                    <p>“The team at @softecagency is incredibly dedicated, knowledgeable, and helpful.</p>
                                    <span>Socrates</span>
                                 </div>
                              </blockquote>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <p>{des_5}</p>
                           </div> */}
                           <div className="postbox__details tagcloud mb-50">
                              <span>Tags:</span>
                              <Link href="#">Envato</Link>
                              <Link href="#">Development</Link>
                              <Link href="#">Technology</Link>
                              <Link href="#">Wordpress</Link>
                           </div>

                           <div className="postbox__navigation-more mb-70 d-flex justify-content-between">
                              <div className="postbox__navigation-left d-flex align-items-center">
                                 <div className="postbox__navigation-img">
                                    <Link href="#"><Image src={navigation_img_1} alt="theme-pure" /></Link>
                                 </div>
                                 <div className="postbox__navigation-content">
                                    <Link href="#">
                                       <span>
                                          <i className="far fa-arrow-left"></i>
                                          Previous post
                                       </span>
                                    </Link>
                                    <h5><Link href="#">Leveraging Feedback...</Link></h5>
                                 </div>
                              </div>
                              <div className="postbox__navigation-right d-flex align-items-center">
                                 <div className="postbox__navigation-content">
                                    <Link href="#">
                                       <span>
                                          Next post
                                          <i className="far fa-arrow-right"></i>
                                       </span>
                                    </Link>
                                    <h5><Link href="#">Typing Tutorials For...</Link></h5>
                                 </div>
                                 <div className="postbox__navigation-img">
                                    <Link href="#"><Image src={navigation_img_2} alt="theme-pure" /></Link>
                                 </div>
                              </div>
                           </div>

                           {/* <div className="postbox__details-author-info-box mb-100 d-flex align-items-start">
                              <div className="postbox__details-author-avata">
                                 <Image src={blog_details_avata} alt="theme-pure" />
                              </div>
                              <div className="postbox__details-author-content">
                                 <h5 className="postbox__details-author-title">Dianne Ameter</h5>
                                 <p>Ex erat referrentur vis. Vim ad consul molestie, eu malorum aliquando
                                    referrentur pro, erroribus gloriatur sed at.!
                                 </p>
                                 <div className="postbox__details-author-social">
                                    <SocialLinks />  
                                 </div>
                              </div>
                           </div>  */}

                           {/* <div className="postbox__comment mb-65">
                              <h3 className="postbox__comment-title">3 Comments</h3>
                              <Comments /> 
                           </div>
                           <div className="postbox__comment-form">
                              <h3 className="postbox__comment-form-title">Leave A Comment</h3>
                              <CommentPost /> 
                           </div> */}
                        </article>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="sidebar__wrapper">
                        <Search />
                        <RecentPost />
                        <Categories />
                        <Tags />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PostboxArea;