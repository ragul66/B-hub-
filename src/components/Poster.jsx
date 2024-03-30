import React from "react";
import appImg from "../assets/contentimg.jpg";
import app5Img from "../assets/contentimg.jpg";

const Poster = () => {
  return (
    <div className="text-center">
      <h2>Responsive Zig Zag Layout Example</h2>
      <p>Resize the browser window to see the effect.</p>

      {/* The App Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 px-4">
            <h1 className="text-6xl font-bold">The App</h1>
            <h1 className="text-4xl font-bold text-green-600">Why buy it?</h1>
            <p className="text-lg">
              <span className="text-2xl font-semibold">
                Take photos like a pro.
              </span>{" "}
              You should buy this app because lorem ipsum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="button bg-green-600 text-white">
              Download Application
            </button>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <img src={appImg} alt="App" className="w-full" />
          </div>
        </div>
      </div>

      {/* Clarity Section */}
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4">
            <img src={app5Img} alt="App 5" className="w-full" />
          </div>
          <div className="w-full md:w-2/3 px-4">
            <h1 className="text-6xl font-bold">Clarity</h1>
            <h1 className="text-4xl font-bold text-red-600">Pixels, who?</h1>
            <p className="text-lg">
              <span className="text-xl font-semibold">
                A revolution in resolution.
              </span>{" "}
              Sharp and clear photos with the world's best photo engine,
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="button bg-red-600 text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
