import AboutImg from "../assets/rania.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-200 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="bg-gradient-to-r from-pink-300 via-rose-400 via-orange-500  to-orange-700 bg-clip-text text-4xl tracking-tight text-transparent"> Me</span>{" "}
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl h-76 w-76 -mt-24" src={AboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify lg:justify-start">
            <p className=" max-w-xl  mt-4 text-gray-50 ">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
