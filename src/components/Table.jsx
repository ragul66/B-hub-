import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Table = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const animation = useAnimation();

  const variants = {
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2 }, // Adjust delay for staggered animation
    }),
    hidden: { opacity: 0, y: 50 },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const rows = [
    ["1", "hi", "nothing", "awards"],
    ["2", "hello", "nothing", "awards"],
    ["3", "welcome", "nothing", "awards"],
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen space-y-2 md:flex md:flex-col md:justify-center md:items-center md:h-screen md:w-screen md:space-y-2 text-textcolor-0 lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-screen font-primary lg:space-y-4">
      <h2 className="text-3xl lg:text-6xl lg:mb-12">Honors & Awards</h2>
      <motion.table
        className="text-xl md:text-2xl lg:text-4xl"
        ref={ref}
        initial="hidden"
        animate={animation}
      >
        {rows.map((row, rowIndex) => (
          <motion.tr
            key={rowIndex}
            variants={variants}
            custom={rowIndex}
            className=" border-b-[0.5px] border-textcolor-0"
          >
            {row.map((cell, cellIndex) => (
              <motion.td
                key={cellIndex}
                className="py-4 px-4 space-y-4 lg:py-12 lg:px-20"
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {cell}
              </motion.td>
            ))}
          </motion.tr>
        ))}
      </motion.table>
    </div>
  );
};

export default Table;
