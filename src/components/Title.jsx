const Title = () => {
  return (
    <div className="flex justify-center items-center h-screen md:flex md:justify-center md:items-center md:h-screen lg:bg-background-0 lg:h-screen lg:flex lg:justify-center lg:items-center text-textcolor-0 font-primary">
      <div className="text-center md:text-center lg:text-center">
        <p className="text-[50px] lg:text-[120px]  lg:animate-fade-in-up lg:font-bold">B-Hub</p>
        <div className="lg:-mt-16">
          <p className="text-[75px] lg:text-[150px]  lg:animate-fade-in-up">Consultancy</p>
          <p className="text-[75px] lg:text-[150px]  lg:animate-fade-in-up lg:-mt-24"> & Services</p>
        </div>
        <p className="text-[25px] lg:text-5xl lg:animate-fade-in-up lg:-mt-6">
          <q>Simply Creative</q>
        </p>
      </div>
    </div>
  );
};

export default Title;
