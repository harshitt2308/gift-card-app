import { motion } from 'framer-motion';

const collections = [
  { name: 'Diwali Gifts', emoji: '🪔', id: 'diwali-gifts' },
  { name: 'Rakhi Gifts', emoji: '🎁', id: 'rakhi-gifts' },
  { name: 'Corporate Gifting', emoji: '🏢', id: 'corporate-gifting' },
  { name: 'Custom Orders', emoji: '✨', id: 'custom-orders' },
];

export default function Collections() {
  return (
    <section className="py-20 px-6 md:px-12 bg-dark text-center border-t border-white/10">
      <h2 className="text-3xl md:text-5xl font-bold text-neon drop-shadow-[0_0_10px_#a855f7] mb-12">
        Explore Our Gift Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            className="group transition duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.07 }}
              className="bg-white/5 border border-neon rounded-2xl p-6 shadow-xl backdrop-blur-md hover:shadow-neon hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-neon">
                {item.name}
              </h3>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
