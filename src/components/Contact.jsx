export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-[#0A0A0F] text-center border-t border-white/10"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-neon drop-shadow-[0_0_10px_#a855f7] mb-8">
        Get in Touch
      </h2>
      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        We'd love to help you find the perfect gift. Reach out via your favorite method:
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <a
          href="tel:+91XXXXXXXXXX"
          className="bg-neon text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          📞 Call Us
        </a>
        <a
          href="mailto:your@email.com"
          className="bg-white/10 border border-neon text-neon px-6 py-3 rounded-full font-semibold hover:bg-neon hover:text-black transition"
        >
          ✉️ Email Us
        </a>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          💬 WhatsApp Chat
        </a>
      </div>
    </section>
  );
}
