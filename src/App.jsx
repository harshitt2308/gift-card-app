import { useEffect, useState,React } from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Contact from './components/Contact';
import GiftCard from './components/GiftCard';
import FloatingGift from './components/FloatingGift';
import CustomGiftModel from './components/CustomGiftModel';
import CursorGlow from './components/CursorGlow';
import FloatingOrbs from './components/FloatingOrbs';
import GiftCardReveal from './components/GiftCardReveal';
import ScrollRiseSection from './components/ScrollRiseSection';
// import { ThemeProvider } from './components/ThemeContext';
// import ThemeToggle from './components/ThemeToggle';

// Reusable section with cards
const GiftCardSection = ({ id, title, emoji, cards }) => (
  <section
    id={id}
    className="py-24 px-6 md:px-12 bg-dark text-center border-t border-white/10"
  >
    <h2 className="text-3xl md:text-5xl font-bold text-neon mb-10 drop-shadow-[0_0_10px_#a855f7]">
      {emoji} {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {cards.map((card, idx) =>
        card.useReveal ? (
          <GiftCardReveal key={idx} {...card} />
        ) : (
          <GiftCard key={idx} {...card} />
        )
      )}
    </div>
  </section>
);

// Placeholder for future gift categories
const GiftCategorySection = ({ id, title, emoji }) => (
  <section
    id={id}
    className="py-24 px-6 md:px-12 bg-dark text-center border-t border-white/10"
  >
    <h2 className="text-3xl md:text-5xl font-bold text-neon drop-shadow-[0_0_10px_#a855f7] mb-6">
      {emoji} {title}
    </h2>
    <p className="text-gray-400 max-w-xl mx-auto">
      Unique hand-picked gifts for {title.toLowerCase()} — coming soon.
    </p>
  </section>
);

function App() {
  const [showOrbs, setShowOrbs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowOrbs(scrollY > window.innerHeight * 0.8); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
     {/* <ThemeProvider> */}
      {/* <ThemeToggle /> */}
      <CursorGlow />
      {showOrbs && <FloatingOrbs />}
     
        <Hero />
        
        <Collections />
        <FloatingGift />
        <CustomGiftModel />
      
      
      <GiftCardSection
        id="diwali-gifts"
        title="Diwali Gifts"
        emoji="🪔"
        cards={[
          {
            image: 'https://source.unsplash.com/400x300/?diwali,gift',
            title: 'Luxury Diya Hamper',
            message: 'Elegant diya set with sweets & decor items.',
            price: '799',
            details: ['Premium diyas', 'Dry fruits', 'Decor accents', 'Greeting card'],
            useReveal: true,
          },
          {
            image: 'https://source.unsplash.com/400x300/?sweets,box',
            title: 'Festival Treat Box',
            message: 'Curated dry fruits, mithai, and greeting card.',
            price: '599',
            details: ['Mithai', 'Dry fruits', 'Roli-Chawal', 'Card'],
            useReveal: true,
          },
          {
            image: 'https://source.unsplash.com/400x300/?candles,gifts',
            title: 'Glow & Joy Set',
            message: 'Handcrafted candles with a festive twist.',
            price: '699',
            details: ['Soy candles', 'Mini torans', 'Festive card'],
            useReveal: true,
          },
        ]}
      />

      <GiftCategorySection id="rakhi-gifts" title="Rakhi Gifts" emoji="🎁" />
      <GiftCategorySection id="corporate-gifting" title="Corporate Gifting" emoji="🏢" />
      <GiftCategorySection id="custom-orders" title="Custom Orders" emoji="✨" />

      <Contact />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
