import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="bg-background-0 text-textcolor-0 h-screen w-screen font-primary relative">
        <Navbar />
        <div className="relative h-2/3 justify-center items-center">
          <Marquee speed={300} className="text-[300px]">
            <h1 className="mt-40">GetInTouch*</h1>
          </Marquee>
        </div>
        <div className="bg-textcolor-0 w-full ml-auto text-background-0 fixed bottom-0 left-0 bg-gray-900 text-white p-8 ">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
            <p className="text-lg font-semibold">
              Feel free to get in touch with us for any inquiries or feedback.
            </p>
            <div className="text-sm">
              <p className="font-semibold text-lg">
                Email:{" "}
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bhubconsultancy@gmail.com"
                  target="_blank"
                  className="font-thin"
                >
                  bhubconsultancy@gmail.com
                </a>
              </p>
              <p className="text-lg font-semibold">
                Phone:{" "}
                <a href="tel:+918124813376" className="font-thin">
                  +918124813376
                </a>
              </p>
            </div>
          </div>
          <div className=" w-36 rounded-lg shadow-lg bg-white ring-1 ring-background-0 flex text-background-0 gap-3 p-3 bottom-0 right-0 mb-4 mr-3  absolute">
            <a href="https://wa.me/8124813376" target="_blank">
              <FaWhatsapp
                size={22}
                className="cursor-pointer hover:scale-125"
              />
            </a>
            <a href="https://www.instagram.com/bhub_2024/" target="_blank">
              <FaInstagram
                size={22}
                className="cursor-pointer hover:scale-125"
              />
            </a>
            <FaLinkedinIn
              size={22}
              className="cursor-pointer hover:scale-125"
            />
            <FaYoutube size={22} className="cursor-pointer hover:scale-125" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
