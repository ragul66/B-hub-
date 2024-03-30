import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ring from "../assets/ring.svg";
import now from "../assets/now.svg";

const Pricing = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <div className="bg-background-0">
        <div className=" h-screen w-screen flex justify-center items-center">
          <div className="text-textcolor-0 font-primary text-[150px] ">
            <h1 className="-mt-20">Prices & Services</h1>
          </div>
        </div>

        <div className="text-background-0 bg-textcolor-0 h-screen font-primary flex flex-row rounded-[100px] ">
          <div className="text-[200px] -space-y-20 mt-12 ml-14">
            <h3>Ready</h3>
            <h3>to Grind</h3>
            <h3>The Market</h3>
          </div>
          <div className="w-96 flex justify-center items-center hover:scale-110">
            <img
              className="mx-auto transition-all hover:animate-spin"
              src={ring}
            />
            <img className="absolute mx-auto" src={now} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
