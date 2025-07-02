export default function GiftCard({ image, title, message, price }) {
  return (
    <div className="bg-white/5 border border-neon rounded-xl overflow-hidden shadow-lg backdrop-blur-lg hover:shadow-neon transition-all">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mb-1">{message}</p>

        {/* Show price if provided */}
        {price && (
          <p className="text-neon font-semibold mb-3">₹{price}</p>
        )}

        <a
          href={`https://wa.me/91XXXXXXXXXX?text=I'm%20interested%20in%20${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-magnetic
          className="inline-block bg-neon text-black font-semibold px-4 py-2 rounded-full hover:scale-105 transition"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
