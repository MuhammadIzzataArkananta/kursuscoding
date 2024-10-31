import BreadcrumbSix from "@/common/breadcrumbs/breadcrumb-6";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React, { useEffect, useState } from "react";
import Banner from "./banner";
import Portfolio from "./portfolio";
import PostboxArea from "./postbox-area";
import { useRouter } from "next/router";
import fetchBlogs from "@/data/marscoding-blogs";

const BlogDetail = () => {
    const router = useRouter()
    const [blogDetail, setBlogDetail] = useState(null)

    useEffect(() => {
      if (router.query.id) {
        const blog = fetchBlogs.find((b) => b.id === parseInt(router.query.id) )        
        setBlogDetail(blog)
      }
    }, [router.query.id])

  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbSix content={blogDetail}/>
            <Banner blogImage={blogDetail}/>
            <PostboxArea blog={blogDetail}/>
            <Portfolio />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default BlogDetail;