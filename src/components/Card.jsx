import React from "react";
import cardHeaderImage from "../assets/1.jpg";
import victorImage from "../assets/image-victor.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Card = ({ details, togglePopup }) => {
  const handleCardClick = (detail) => {
    togglePopup(detail); // Pass the selected card detail to togglePopup
  };
  return (
    <div className="mt-56">
      <h2 className="text-[150px] font-primary text-center">Our Team</h2>
      <div className="px-2 text-base flex justify-center items-center font-Kumbh flex-wrap">
        {details.map((detail, index) => (
          <div
            key={index}
            className="text-lg h-80 md:h-60 w-full md:w-72 bg-white shadow-2xl rounded-lg m-3"
          >
            <div className="-mb-4">
              <img
                src={cardHeaderImage}
                alt={"cardHeaderImage"}
                className="rounded-t-lg w-full h-24"
              />
            </div>
            <div className="flex justify-center -mb-2">
              <img
                onClick={() => handleCardClick(detail)} // Call handleCardClick on card click
                src={victorImage}
                alt={"victorImage"}
                className="rounded-full relative bottom-3 border-3 border-white w-14 md:w-16 hover:cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center items-center font-extrabold text-md">
              <div className="gap-1">
                {detail.name}{" "}
                <span className="font-light text-gray-400">{detail.age}</span>
              </div>
              <div className="font-light text-xs text-gray-400 tracking-wide mt-1">
                {detail.place}
              </div>
            </div>

            <hr className="bg-black my-2" />
            <div className="flex justify-around text-center mt-4">
              <FaLinkedinIn
                size={22}
                className="cursor-pointer hover:scale-125"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
