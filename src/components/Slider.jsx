import { motion } from "framer-motion";
// import figma1 from "../assets/"

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card({ emoji }) {
  return (
    <motion.div
      className="overflow-hidden flex items-center justify-center relative pt-20 m-8 "
      style={{ width: "calc(50% - 4rem)" }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 ml-[150px] mt-12"
        style={{
          clipPath:
            "path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')",
        }}
      >
        <div className="w-full h-full bg-[#4f84c4]" />
      </div>
      <motion.div
        className="font-bold text-6xl w-72 h-96 flex items-center justify-center bg-textcolor-0 rounded-xl shadow-xl"
        variants={cardVariants}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food = ["🍅", "🍐", "🍏", "🫐", "🍇"];

export default function Slider() {
  return (
    <div className="flex flex-wrap justify-center items-center bg-background-0">
      <h2 className="text-[35px] md:text-[80px] lg:text-[120px] font-primary text-center w-full  text-textcolor-0">
        Diverse Design Selection
      </h2>
      {food.map((emoji) => (
        <Card emoji={emoji} key={emoji} />
      ))}
    </div>
  );
}
