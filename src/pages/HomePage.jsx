import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Title from "../components/Title";
import Share from "../components/Share";
import Marquee from "react-fast-marquee";
import Table from "../components/Table";

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <div className="bg-background-0 w-full h-full">
        <Title />
        <Marquee
          speed={300}
          className="h-screen text-center text-[100px] md:h-screen md:text-center md:text-[200px] lg:h-screen lg:text-center lg:text-[350px] lg:service text-textcolor-0 font-primary"
        >
          <h1>Portfolio*</h1>
        </Marquee>
        <Services />
        <Table />
        {/* <Footer /> */}
        <Share />
      </div>
    </>
  );
};

export default Home;
