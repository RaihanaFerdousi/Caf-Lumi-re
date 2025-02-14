import { motion } from "framer-motion";
import bannerimg from "../../../assets/pexels-anete-lusina-5722871.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[500px] flex items-center mb-20 banner bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerimg})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-2xl px-10 text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <motion.h3
          className="uppercase tracking-wide merriweather"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Welcome to Bruin Cafe
        </motion.h3>

        <motion.h1
          className="text-6xl w-[600px] leading-tight mt-2 merriweather"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Enjoy Your Morning <br /> Coffee Shot
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Donec vitae libero non enim placerat eleifend aliquam erat volutpat.
          Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique,
          commodo gravida lectus non.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.button
            className="bg-[#3F271E] text-white font-serif py-2 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Table
          </motion.button>

          <motion.button
            className="bg-white text-gray-900 hover:bg-gray-200 font-serif py-2 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Our Shop
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
