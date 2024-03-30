import { useNavigate } from "react-router-dom";
import TypingText from "./TypingText";

const Footer = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/Contact");
  };

  return (
    <div className="h-screen w-full lg:bg-background-0 lg:h-screen lg:flex lg:flex-col lg:justify-between">
      <div className="text-textcolor-0 font-primary text-center lg:text-left lg:mt-40">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col text-6xl font-extralight lg:-mb-20 lg:mr-2">
            <p>Let's</p>
            <p className="lg:-mt-2">create</p>
          </div>
          <p className="flex flex-col text-9xl  lg:-mb-14">something</p>
        </div>
        <p className=" lg:text-[150px] justify-center flex lg:mt-6">MEANINGFUL</p>
        <div className="flex flex-row justify-center text-[60px] lg:-mt-14">
          <p className="font-bold">TOGETHER</p>
          <p className="font-extralight flex flex-row">
            (<TypingText text={"but not Forever"} />)
          </p>
        </div>
      </div>
      <button
        className="text-textcolor-0 border-2 text-lg px-4 py-2 rounded-full border-textcolor-0 hover:bg-textcolor-0 hover:font-semibold hover:text-background-0 block mx-auto flex-row"
        onClick={handleContact}
      >
        Contact Us
      </button>
      <div className="text-textcolor-0 flex flex-row gap-4 p-4 justify-center">
        <p className="text-sm text-center font-primary">
          © B-Hub Consultancy & Services 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
