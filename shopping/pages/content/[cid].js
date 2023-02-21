import React from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/common/header/Header";
import Navbar from "../../src/components/common/navbar/Navbar";
import ContentDetail from "../../src/components/content/ContentDetail/ContentDetail";

const Detail = () => {
  const router = useRouter();
  const contentDetail = router.query;
  return (
    <>
      <Header />
      <Navbar />
      <ContentDetail contentDetail={contentDetail} />
    </>
  );
};

export default Detail;
