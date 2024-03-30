import React, { useState } from "react";
import Card from "../components/Card";
import gowtham from "../assets/gowtham.jpg";
import yohitha from "../assets/yohitha.jpg";
import sree from "../assets/sree.jpg";
import Aravindh from "../assets/ARAVIND.jpg";
import Ragul from "../assets/Ragul.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Share from "../components/Share";
import PopupCard from "../components/PopupCard";
import Title2 from "../components/Title2";
import Map from "../components/Map";
import Gallery from "../components/Gallery";

const About = () => {
  window.scrollTo(0, 0);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // State to store selected card detail

  const togglePopup = (detail) => {
    setShowPopup(!showPopup);
    setSelectedCard(detail);
  };

  const teamData = [
    {
      img: gowtham,
      name: "Gowtham Raj S",
      place: "Madurai",
      age: 5,
      description:
        "In the intricate tapestry of life, coding threads its way as more than a skill; it embodies a profound ethos. It's not just about writing lines of code; it's a journey of perpetual exploration, creativity, and community. Every bug fixed, every feature implemented, we embark on a voyage of discovery, shaping not only software but also ourselves. Coding is a language that transcends borders, connecting minds across cultures and continents. It's a beacon of innovation, a testament to human ingenuity, and a reminder that our collective potential knows no bounds. In this digital symphony, coding is not just a note; it's the melody that defines our existence.",
    },
    {
      img: yohitha,
      name: "Yohitha S",
      place: "Madurai",
      age: 20,
      description:
        "In the intricate tapestry of life, coding threads its way as more than a skill; it embodies a profound ethos. It's not just about writing lines of code; it's a journey of perpetual exploration, creativity, and community. Every bug fixed, every feature implemented, we embark on a voyage of discovery, shaping not only software but also ourselves. Coding is a language that transcends borders, connecting minds across cultures and continents. It's a beacon of innovation, a testament to human ingenuity, and a reminder that our collective potential knows no bounds. In this digital symphony, coding is not just a note; it's the melody that defines our existence.",
    },
    {
      img: sree,
      name: "Sree Aranganathan D",
      place: "Aruppukottai",
      age: 20,
      description:
        "In the intricate tapestry of life, coding threads its way as more than a skill; it embodies a profound ethos. It's not just about writing lines of code; it's a journey of perpetual exploration, creativity, and community. Every bug fixed, every feature implemented, we embark on a voyage of discovery, shaping not only software but also ourselves. Coding is a language that transcends borders, connecting minds across cultures and continents. It's a beacon of innovation, a testament to human ingenuity, and a reminder that our collective potential knows no bounds. In this digital symphony, coding is not just a note; it's the melody that defines our existence.",
    },
    {
      img: Aravindh,
      name: "Aravindhan UD",
      place: "Madurai",
      age: 20,
      description:
        "In the intricate tapestry of life, coding threads its way as more than a skill; it embodies a profound ethos. It's not just about writing lines of code; it's a journey of perpetual exploration, creativity, and community. Every bug fixed, every feature implemented, we embark on a voyage of discovery, shaping not only software but also ourselves. Coding is a language that transcends borders, connecting minds across cultures and continents. It's a beacon of innovation, a testament to human ingenuity, and a reminder that our collective potential knows no bounds. In this digital symphony, coding is not just a note; it's the melody that defines our existence.",
    },
    {
      img: Ragul,
      name: "Ragul Vasanth SM",
      place: "Madurai",
      age: 20,
      description:
        "In the intricate tapestry of life, coding threads its way as more than a skill; it embodies a profound ethos. It's not just about writing lines of code; it's a journey of perpetual exploration, creativity, and community. Every bug fixed, every feature implemented, we embark on a voyage of discovery, shaping not only software but also ourselves. Coding is a language that transcends borders, connecting minds across cultures and continents. It's a beacon of innovation, a testament to human ingenuity, and a reminder that our collective potential knows no bounds. In this digital symphony, coding is not just a note; it's the melody that defines our existence.",
    },
  ];

  return (
    <>
      <div className="bg-background-0 text-textcolor-0 h-full">
        <Navbar />
        <Title2 />
        <Card details={teamData} togglePopup={togglePopup} />
        <PopupCard
          togglePopup={togglePopup}
          showPopup={showPopup}
          selectedCard={selectedCard}
        />
        <Gallery />
        <Map />
        <Footer />
        <Share />
      </div>
    </>
  );
};

export default About;
