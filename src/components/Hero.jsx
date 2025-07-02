import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-neon drop-shadow-[0_0_10px_#a855f7]"
        >
          YAMI Creation
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          Gifts for Every Occasion
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon text-black px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>
          <a
            href="mailto:your@email.com"
            className="border border-neon px-6 py-3 rounded-full hover:bg-neon hover:text-black transition"
          >
            Email Us
          </a>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-800 via-fuchsia-600 to-blue-800 opacity-30 animate-pulse z-0 blur-3xl"></div>
    </section>
  );
}
