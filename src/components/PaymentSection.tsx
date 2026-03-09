import { motion } from "framer-motion";
import { Lock, Zap, RefreshCw } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const providers = [
  {
    name: "PayPal",
    color: "#003087",
    bgColor: "hsl(var(--card))",
    logo: (
      <svg viewBox="0 0 124 33" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3 5.6H4.1L0 27.4h4.5l1.1-6.9h3.5c5.4 0 8.7-2.7 9.4-7.7.7-4.6-1.9-7.2-8.3-7.2zm.8 7.6c-.4 2.4-2.1 3.6-4.6 3.6H4.9l1.2-7.3h1.5c2.6 0 3.9 1.1 3.5 3.7z" fill="#003087"/>
        <path d="M27.5 5.6h-6.2l-4.1 21.8h4.5l1.1-6.9h3.5c5.4 0 8.7-2.7 9.4-7.7.7-4.6-1.9-7.2-8.2-7.2zm.8 7.6c-.4 2.4-2.1 3.6-4.6 3.6h-1.6l1.2-7.3h1.5c2.5 0 3.9 1.1 3.5 3.7z" fill="#009cde"/>
        <path d="M49.8 13.1h-4.5l-.3 1.5c-.8-1.1-2.2-1.8-4.1-1.8-4.4 0-7.9 3.5-7.9 8.1 0 3.4 2.1 5.6 5.2 5.6 1.9 0 3.5-.8 4.6-2.1l-.3 1.8h4.5l2.8-13.1zm-6.4 7.6c-.3 1.9-1.8 3.2-3.6 3.2-1.5 0-2.4-.9-2.4-2.4 0-2 1.5-3.3 3.5-3.3 1.5 0 2.5.9 2.5 2.5z" fill="#003087"/>
        <path d="M65.8 13.1h-4.7l-3.5 8.5-1.3-8.5H52l2.7 12.4-2.8 4.5h4.7l9.2-16.9z" fill="#003087"/>
        <path d="M77.6 5.6h-6.2l-4.1 21.8h4.5l1.1-6.9h3.5c5.4 0 8.7-2.7 9.4-7.7.7-4.6-2-7.2-8.2-7.2zm.8 7.6c-.4 2.4-2.1 3.6-4.6 3.6h-1.6l1.2-7.3h1.5c2.5 0 3.8 1.1 3.5 3.7z" fill="#009cde"/>
        <path d="M100.3 13.1h-4.5l-.3 1.5c-.8-1.1-2.2-1.8-4.1-1.8-4.4 0-7.9 3.5-7.9 8.1 0 3.4 2.1 5.6 5.2 5.6 1.9 0 3.5-.8 4.6-2.1l-.3 1.8h4.5l2.8-13.1zm-6.4 7.6c-.3 1.9-1.8 3.2-3.6 3.2-1.5 0-2.4-.9-2.4-2.4 0-2 1.5-3.3 3.5-3.3 1.5 0 2.5.9 2.5 2.5z" fill="#003087"/>
        <path d="M104.2 27.4h4.3l6.4-21.8h-4.3l-6.4 21.8z" fill="#009cde"/>
      </svg>
    ),
  },
  {
    name: "Cash App",
    color: "#00D64F",
    bgColor: "hsl(var(--card))",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#00D64F" }}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.5 14.5h-3v-1.5c-1.381 0-2.5-1.119-2.5-2.5h1.5c0 .552.448 1 1 1h2.5c.552 0 1-.448 1-1s-.448-1-1-1h-1.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5V5h3v1.5c1.381 0 2.5 1.119 2.5 2.5h-1.5c0-.552-.448-1-1-1H11c-.552 0-1 .448-1 1s.448 1 1 1h1.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5v1.5z"/>
          </svg>
        </div>
        <span className="font-bold text-lg" style={{ color: "#00D64F" }}>Cash App</span>
      </div>
    ),
  },
  {
    name: "Bank of America",
    color: "#E31837",
    bgColor: "hsl(var(--card))",
    logo: (
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full" style={{ background: "#E31837" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#E31837" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#E31837" }} />
        </div>
        <div className="text-center">
          <div className="font-bold text-sm leading-tight" style={{ color: "#E31837" }}>Bank of America</div>
        </div>
      </div>
    ),
  },
  {
    name: "Chase",
    color: "#117ACA",
    bgColor: "hsl(var(--card))",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="4" fill="#117ACA"/>
          <path d="M30 10 L50 30 L30 50 L10 30 Z" fill="white" opacity="0.9"/>
          <path d="M30 10 L50 30 L30 30 L30 10 Z" fill="white" opacity="0.6"/>
          <path d="M10 30 L30 30 L30 50 L10 30 Z" fill="white" opacity="0.6"/>
        </svg>
        <span className="font-bold text-xl" style={{ color: "#117ACA" }}>CHASE</span>
      </div>
    ),
  },
  {
    name: "Zelle",
    color: "#6D1ED4",
    bgColor: "hsl(var(--card))",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6D1ED4, #9B59D0)" }}>
          <span className="text-white font-bold text-lg">Z</span>
        </div>
        <span className="font-bold text-xl" style={{ color: "#6D1ED4" }}>Zelle</span>
      </div>
    ),
  },
  {
    name: "Venmo",
    color: "#3D95CE",
    bgColor: "hsl(var(--card))",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#3D95CE" }}>
          <span className="text-white font-bold text-base">V</span>
        </div>
        <span className="font-bold text-xl" style={{ color: "#3D95CE" }}>venmo</span>
      </div>
    ),
  },
  {
    name: "Visa",
    color: "#1A1F71",
    bgColor: "hsl(var(--card))",
    logo: (
      <svg viewBox="0 0 78 25" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5 1.2L19.3 23.8H12.7L7.7 6.4C7.4 5.3 7.1 4.9 6.3 4.4 5 3.7 2.8 3 .9 2.6L1 1.2h10.8c1.4 0 2.6 1 2.9 2.6l2.7 14.2L23.3 1.2h6.2zm24.5 15.3c0-6-8.3-6.3-8.2-9 0-.8.8-1.7 2.5-1.9 1.1-.1 4 .2 7.3 1.8L56.5 2c-1.8-.6-4-1.2-6.8-1.2-6.1 0-10.3 3.3-10.3 7.9-.1 3.5 3.1 5.4 5.4 6.5 2.4 1.2 3.2 2 3.2 3 0 1.6-1.9 2.3-3.7 2.3-3.1 0-4.9-.8-6.3-1.5L37 24.3c1.4.7 4.1 1.3 6.8 1.3 6.4 0 10.6-3.2 10.6-8.1h.6v-.1zM76 23.8h5.9L76.5 1.2h-5.5c-1.2 0-2.3.7-2.7 1.8L59.4 23.8h6.4l1.3-3.5h7.8l.7 3.5h.4zm-6.8-8.3l3.2-8.8 1.8 8.8h-5z" fill="#1A1F71"/>
      </svg>
    ),
  },
  {
    name: "Mastercard",
    color: "#EB001B",
    bgColor: "hsl(var(--card))",
    logo: (
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full" style={{ background: "#EB001B" }} />
          <div className="w-8 h-8 rounded-full -ml-3" style={{ background: "#F79E1B", opacity: 0.9 }} />
        </div>
        <span className="font-semibold text-sm text-foreground">mastercard</span>
      </div>
    ),
  },
];

const features = [
  { icon: Lock, label: "SSL Encrypted" },
  { icon: Zap, label: "Instant Deposits" },
  { icon: RefreshCw, label: "Fast Withdrawals" },
];

export default function PaymentSection() {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-5 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-body font-medium">Secure & Convenient</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Deposit & Withdraw <span className="text-gradient-blue">Instantly</span>
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground font-body max-w-lg mx-auto">
            Fund your account or cash out your profits with your favorite payment method — quickly, safely, and with zero hassle.
          </motion.p>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              variants={fadeInUp}
              custom={i}
              className="flex items-center gap-2 bg-card border border-border/50 rounded-full px-5 py-2.5 shadow-sm"
            >
              <f.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-body font-medium text-foreground">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Provider Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {providers.map((provider, i) => (
            <motion.div
              key={provider.name}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.25 } }}
              className="bg-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-default min-h-[100px]"
            >
              <div className="flex items-center justify-center">
                {provider.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground font-body mt-8"
        >
          All transactions are protected with 256-bit SSL encryption. Funds available instantly.
        </motion.p>
      </div>
    </section>
  );
}
