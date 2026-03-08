import { motion, useAnimationControls } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import avatarsGrid from "@/assets/avatars-grid.png";

const testimonials = [
  { name: "Michael R.", role: "Professional Trader", text: "The execution speed is unmatched. I've been trading for 12 years and this platform is the best I've used.", stars: 5, row: 0, col: 0 },
  { name: "Sarah K.", role: "Day Trader", text: "The copy trading feature changed my life. I'm now consistently profitable following top traders.", stars: 5, row: 0, col: 1 },
  { name: "James T.", role: "Portfolio Manager", text: "Institutional-grade tools with a retail-friendly interface. Outstanding platform.", stars: 5, row: 0, col: 2 },
  { name: "Linda W.", role: "Swing Trader", text: "Spreads are incredibly tight. I've saved thousands in trading costs compared to my previous broker.", stars: 5, row: 0, col: 3 },
  { name: "David O.", role: "Crypto Trader", text: "The charting tools are world-class. Technical analysis has never been easier or more accurate.", stars: 5, row: 0, col: 4 },
  { name: "Emmanuel A.", role: "Forex Analyst", text: "Customer support is phenomenal. Any issue gets resolved within minutes, not hours.", stars: 5, row: 1, col: 0 },
  { name: "Carlos M.", role: "Scalper", text: "Zero slippage on major pairs. This is the real deal for high-frequency trading strategies.", stars: 5, row: 1, col: 1 },
  { name: "Maria G.", role: "Investment Advisor", text: "I recommend PocketBroker to all my clients. The platform is intuitive and the education resources are top-notch.", stars: 5, row: 1, col: 2 },
  { name: "Raj P.", role: "Options Trader", text: "The mobile app is just as powerful as the desktop version. I can trade anywhere, anytime.", stars: 4, row: 1, col: 3 },
  { name: "Priya S.", role: "Algorithmic Trader", text: "API integration was seamless. My bots are running 24/7 with zero downtime.", stars: 5, row: 1, col: 4 },
  { name: "Robert J.", role: "Retired Investor", text: "Even as a beginner, I felt supported every step of the way. Great educational materials.", stars: 5, row: 2, col: 0 },
  { name: "Ana L.", role: "Commodity Trader", text: "Gold and oil trading spreads are the lowest I've seen. Execution is instant.", stars: 5, row: 2, col: 1 },
  { name: "Sophie B.", role: "Fund Manager", text: "Managing multiple portfolios is effortless. The dashboard gives me everything at a glance.", stars: 5, row: 2, col: 2 },
  { name: "Marcus D.", role: "Position Trader", text: "Withdrawal processing is lightning fast. Had my funds within 2 hours every single time.", stars: 4, row: 2, col: 3 },
  { name: "Tony W.", role: "Index Trader", text: "The social trading community is amazing. Learning from experienced traders accelerated my growth.", stars: 5, row: 2, col: 4 },
];

function AvatarFromGrid({ row, col }: { row: number; col: number }) {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
      <div
        className="w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url(${avatarsGrid})`,
          backgroundPosition: `${col * 25}% ${row * 50}%`,
          backgroundSize: '500% 300%',
        }}
      />
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-500 w-[340px] flex-shrink-0 mx-3">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: t.stars }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
        ))}
        {Array.from({ length: 5 - t.stars }).map((_, j) => (
          <Star key={`e-${j}`} className="w-3.5 h-3.5 text-border" />
        ))}
      </div>
      <p className="text-foreground/70 font-body text-sm mb-5 leading-relaxed italic">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <AvatarFromGrid row={t.row} col={t.col} />
        <div>
          <div className="font-display font-semibold text-foreground text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground font-body">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function ScrollRow({ items, direction }: { items: typeof testimonials; direction: "left" | "right" }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex"
        animate={{ x: direction === "left" ? [0, -(items.length * 366)] : [-(items.length * 366), 0] }}
        transition={{ duration: items.length * 8, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);
  const row3 = testimonials.slice(10, 15);

  return (
    <section id="testimonials" className="py-24 relative bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Trusted by <span className="text-gradient-blue">Traders</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Join over 150,000 traders who rely on PocketBroker every day.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling testimonials (Single Row) */}
      <div className="space-y-4">
        <ScrollRow items={testimonials} direction="left" />
      </div>
    </section>
  );
}
