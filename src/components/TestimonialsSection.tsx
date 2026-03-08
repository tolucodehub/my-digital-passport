import { motion } from "framer-motion";
import { Star } from "lucide-react";
import avatarsGrid from "@/assets/avatars-grid.png";

// row: 0-3 (4 rows), col: 0-6 (7 cols) matching generated avatar grid
const testimonials = [
  { name: "Michael R.", role: "Teacher", text: "The platform is incredibly easy to use. I've been learning to trade in my spare time.", stars: 5, row: 0, col: 0 },
  { name: "Sarah K.", role: "Nurse", text: "The copy trading feature changed my life. I'm making extra income while working long shifts.", stars: 5, row: 0, col: 1 },
  { name: "James T.", role: "Retired Soldier", text: "Great tools with a friendly interface. Support team is always helpful.", stars: 5, row: 0, col: 2 },
  { name: "Linda W.", role: "Cleaner", text: "I started small, and the low costs really helped me grow my account over time.", stars: 5, row: 0, col: 3 },
  { name: "David O.", role: "Uber Driver", text: "The mobile app is perfect. I can manage my trades while waiting for my next ride.", stars: 5, row: 0, col: 4 },
  { name: "Emmanuel A.", role: "Construction Worker", text: "Customer support is phenomenal. Any issue gets resolved quickly.", stars: 5, row: 1, col: 0 },
  { name: "Carlos M.", role: "Mechanic", text: "Fast execution on my trades. I've recommended it to all my friends.", stars: 5, row: 1, col: 1 },
  { name: "Maria G.", role: "Stay-at-home Mom", text: "I love the educational resources. It made getting started so much easier.", stars: 5, row: 1, col: 2 },
  { name: "Raj P.", role: "Student", text: "The minimum deposit was perfect for my budget. Learning a lot!", stars: 4, row: 1, col: 3 },
  { name: "Priya S.", role: "Retail Worker", text: "Very reliable platform. My withdrawals are always processed quickly.", stars: 5, row: 1, col: 4 },
  { name: "Robert J.", role: "Trader", text: "Even as a beginner, I felt supported every step of the way.", stars: 5, row: 2, col: 0 },
  { name: "Ana L.", role: "Chef", text: "Trading gold has been great. The spreads are very fair.", stars: 5, row: 2, col: 1 },
  { name: "Sophie B.", role: "Freelancer", text: "Managing my trades is effortless. The dashboard gives me everything at a glance.", stars: 5, row: 2, col: 2 },
  { name: "Marcus D.", role: "Electrician", text: "Withdrawal processing is lightning fast. Had my funds quickly every single time.", stars: 4, row: 2, col: 3 },
  { name: "Tony W.", role: "Delivery Driver", text: "The social trading community is amazing. Learning from others accelerated my growth.", stars: 5, row: 3, col: 0 },
];

// Grid has ~7 cols × 4 rows. backgroundSize zooms so one cell fills the 40×40 circle.
function AvatarFromGrid({ row, col }: { row: number; col: number }) {
  const colPct = (col / 6) * 100;
  const rowPct = (row / 3) * 100;
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${avatarsGrid})`,
          backgroundSize: "700% 400%",
          backgroundPosition: `${colPct}% ${rowPct}%`,
          backgroundRepeat: "no-repeat",
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

function ScrollRow({ items }: { items: typeof testimonials }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex"
        animate={{ x: [0, -(items.length * 366)] }}
        transition={{ duration: items.length * 6, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
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

      {/* Single auto-scrolling row */}
      <ScrollRow items={testimonials} />
    </section>
  );
}
