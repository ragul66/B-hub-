import React from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Share from "../components/Share";
import Title2 from "../components/Title2";
import Gallery from "../components/Gallery";

export default function Designs() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="bg-background-0">
        <Navbar />
        <Title2 />
        <Gallery />
        <Slider />
        {/* <Footer /> */}
        <Share />
      </div>
    </>
  );
}
