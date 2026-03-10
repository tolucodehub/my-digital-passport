import { motion } from "framer-motion";
import { Lock, Zap, RefreshCw, ShieldCheck } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

// PayPal SVG
const PayPalLogo = () => (
  <div className="flex items-center gap-1.5">
    <svg viewBox="0 0 40 48" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.4 6.2C31.5 4 27.9 3 23.3 3H9.7C8.7 3 7.9 3.7 7.7 4.7L2 37.8c-.1.7.4 1.4 1.1 1.4h8l2-12.7-.1.5c.2-1 1-1.7 2-1.7h4.2c8.2 0 14.6-3.3 16.5-13 .1-.4.1-.8.2-1.2-.2-.1-.2-.1 0 0 .5-3.3 0-5.6-2.5-6.8z" fill="#003087"/>
      <path d="M35.9 12.9c-.1.4-.2.8-.2 1.2-1.9 9.7-8.3 13-16.5 13H15c-1 0-1.8.7-2 1.7L10.7 42l-.6 3.8c-.1.6.4 1.2 1 1.2h7c.9 0 1.6-.6 1.7-1.5l.1-.4 1.4-8.7.1-.5c.2-.9.9-1.5 1.7-1.5h1.1c7.1 0 12.7-2.9 14.3-11.2.7-3.5.3-6.4-1.6-8.3z" fill="#009cde"/>
      <path d="M34.2 12.4c-.3-.1-.6-.2-.9-.2-.3-.1-.7-.1-1-.2-1.3-.2-2.7-.3-4.2-.3H17.3c-.3 0-.6.1-.9.2-.7.4-1.1 1-1.2 1.8L13 28.8v.4c.2-1 1-1.7 2-1.7h4.2c8.2 0 14.6-3.3 16.5-13 .1-.4.1-.8.2-1.2-.5-.3-1-.6-1.7-.9z" fill="#012169"/>
    </svg>
    <span className="font-bold text-lg text-primary">PayPal</span>
  </div>
);

// Cash App SVG
const CashAppLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#00D632" }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M13.5 7.5h-3v-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5h1.5c.552 0 1 .448 1 1s-.448 1-1 1H9c-.552 0-1-.448-1-1H6.5c0 1.381 1.119 2.5 2.5 2.5V16h3v-1.5c1.381 0 2.5-1.119 2.5-2.5S13.381 9.5 12 9.5h-1.5c-.552 0-1-.448-1-1s.448-1 1-1H13c.552 0 1 .448 1 1h1.5c0-1.381-1.119-2.5-2.5-2.5V7.5z"/>
        <path d="M17.1 3.9a1 1 0 00-.8-.4l-1.5.2-.7-1.3A1 1 0 0013 2h-2a1 1 0 00-.9.6L9.4 4H7.7a1 1 0 00-1 .8l-.3 2-.3.1L4.5 6a1 1 0 00-1.1.6l-.8 2a1 1 0 00.3 1.1l1.5 1.2v.3l-1.5 1.2a1 1 0 00-.3 1.1l.8 2a1 1 0 001.1.6l1.6-.9.3.1.3 2a1 1 0 001 .8h1.7l.7 1.4a1 1 0 00.9.5h2a1 1 0 00.9-.5l.7-1.4h1.7a1 1 0 001-.8l.3-2 .3-.1 1.6.9a1 1 0 001.1-.6l.8-2a1 1 0 00-.3-1.1L19 12v-.3l1.5-1.2a1 1 0 00.3-1.1l-.8-2a1 1 0 00-1.1-.6l-1.6.9-.3-.1-.3-2a1 1 0 00-.6-.7z" opacity="0"/>
      </svg>
    </div>
    <span className="font-bold text-lg" style={{ color: "#00D632" }}>Cash App</span>
  </div>
);

// Bank of America
const BofALogo = () => (
  <div className="flex flex-col items-center gap-0.5">
    <div className="flex items-end gap-0.5">
      {[20, 28, 36, 28, 20].map((h, i) => (
        <div key={i} className="w-2 rounded-sm" style={{ height: h, background: "linear-gradient(180deg, #E31837 0%, #c00020 100%)" }} />
      ))}
    </div>
    <span className="font-bold text-[11px] tracking-tight leading-tight text-center text-foreground">Bank of America</span>
  </div>
);

// Chase Bank
const ChaseLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 rounded-sm overflow-hidden flex items-center justify-center" style={{ background: "#117ACA" }}>
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M20 4 L36 20 L20 36 L4 20 Z" fill="white" opacity="0.95"/>
        <path d="M20 4 L36 20 L20 20 Z" fill="white" opacity="0.5"/>
        <path d="M4 20 L20 20 L20 36 Z" fill="white" opacity="0.5"/>
      </svg>
    </div>
    <span className="font-bold text-xl tracking-wide" style={{ color: "#117ACA" }}>CHASE</span>
  </div>
);

// Zelle
const ZelleLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6D1ED4 0%, #9B59D0 100%)" }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M4 5h11.5l-9 14H4V5zm7.5 0H20v14h-4.5l-9-14h5l5.5 8.5V5h-5.5z" opacity="0"/>
        <text x="4" y="17" fontSize="14" fontWeight="bold" fill="white">Z</text>
      </svg>
      <span className="text-white font-black text-base">Z</span>
    </div>
    <span className="font-bold text-xl" style={{ color: "#6D1ED4" }}>Zelle</span>
  </div>
);

// Venmo
const VenmoLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#008CFF" }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M19 3.5c.5 1.2.7 2.5.7 3.9 0 3.9-3.3 9-6 12.6H7.4L4 3.5l6.1-.6 1.7 13.7c1.6-2.6 3.6-6.8 3.6-9.5 0-1.6-.3-2.7-.7-3.5L19 3.5z"/>
      </svg>
    </div>
    <span className="font-bold text-xl" style={{ color: "#008CFF" }}>venmo</span>
  </div>
);

// Visa
const VisaLogo = () => (
  <svg viewBox="0 0 80 26" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 1L18.8 25H12.3L7.4 6.2C7.1 5 6.8 4.5 6 4C4.7 3.3 2.5 2.7.6 2.3L.7 1H11.3c1.4 0 2.6 1 2.9 2.7L17 17.5 23 1H29zm25 16.2c0-5.9-8.1-6.2-8-8.8 0-.8.8-1.6 2.5-1.8 1-.1 3.9.2 7.2 1.8L56.4 2C54.6 1.3 52.4.8 49.7.8 43.7.8 39.6 4 39.6 8.6c0 3.4 3 5.3 5.3 6.4 2.3 1.1 3.1 1.9 3.1 2.9 0 1.6-1.9 2.3-3.6 2.3-3.1 0-4.8-.8-6.2-1.4L37.5 24c1.4.6 4 1.3 6.7 1.3 6.3 0 10.4-3.1 10.4-8l.4.9zM74 25h5.8L74.4 1h-5.4c-1.2 0-2.2.7-2.6 1.8L57.5 25h6.3l1.3-3.5h7.7L74 25zm-6.7-8.4l3.2-8.6 1.8 8.6h-5zM38 1l-5 24H27l5-24h6z" fill="#1A1F71"/>
  </svg>
);

// Mastercard
const MastercardLogo = () => (
  <div className="flex items-center gap-2">
    <div className="relative flex">
      <div className="w-9 h-9 rounded-full" style={{ background: "#EB001B" }} />
      <div className="w-9 h-9 rounded-full -ml-3.5" style={{ background: "#F79E1B" }} />
    </div>
    <span className="font-semibold text-sm text-foreground">mastercard</span>
  </div>
);

// Wire Transfer
const WireLogo = () => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-primary/40" style={{ background: "hsl(var(--primary) / 0.1)" }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2">
        <path d="M3 12h18M3 6h18M3 18h18" />
        <circle cx="8" cy="12" r="2" fill="hsl(var(--primary))" stroke="none"/>
        <circle cx="16" cy="6" r="2" fill="hsl(var(--primary))" stroke="none"/>
        <circle cx="12" cy="18" r="2" fill="hsl(var(--primary))" stroke="none"/>
      </svg>
    </div>
    <span className="text-xs font-semibold text-foreground">Wire Transfer</span>
  </div>
);

// Bitcoin
const BitcoinLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#F7931A" }}>
      <span className="text-white font-black text-base">₿</span>
    </div>
    <span className="font-bold text-lg" style={{ color: "#F7931A" }}>Bitcoin</span>
  </div>
);

const providers = [
  { name: "PayPal", Logo: PayPalLogo, tag: "Instant" },
  { name: "Cash App", Logo: CashAppLogo, tag: "Instant" },
  { name: "Bank of America", Logo: BofALogo, tag: "1-2 Days" },
  { name: "Chase", Logo: ChaseLogo, tag: "Same Day" },
  { name: "Zelle", Logo: ZelleLogo, tag: "Instant" },
  { name: "Venmo", Logo: VenmoLogo, tag: "Instant" },
  { name: "Visa", Logo: VisaLogo, tag: "Instant" },
  { name: "Mastercard", Logo: MastercardLogo, tag: "Instant" },
  { name: "Wire Transfer", Logo: WireLogo, tag: "1-3 Days" },
  { name: "Bitcoin", Logo: BitcoinLogo, tag: "Instant" },
];

const features = [
  { icon: Lock, label: "256-bit SSL Encryption" },
  { icon: Zap, label: "Instant Deposits" },
  { icon: RefreshCw, label: "Fast Withdrawals" },
  { icon: ShieldCheck, label: "Segregated Funds" },
];

export default function PaymentSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-5 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-body font-medium">Secure & Convenient</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-4xl md:text-6xl font-display font-bold mb-5 text-foreground">
            Deposit & Withdraw <span className="text-gradient-blue">Effortlessly</span>
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground font-body max-w-xl mx-auto text-lg">
            Fund your account or cash out your profits using your preferred payment method — fast, secure, and with zero hassle.
          </motion.p>
        </motion.div>

        {/* Trust pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              variants={fadeInUp}
              custom={i}
              className="flex items-center gap-2 bg-card border border-primary/20 rounded-full px-5 py-2.5 shadow-sm hover:border-primary/40 transition-colors duration-300"
            >
              <f.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-body font-medium text-foreground">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Provider Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {providers.map((provider, i) => (
            <motion.div
              key={provider.name}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.25 } }}
              className="relative bg-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default min-h-[110px] group overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10 flex items-center justify-center h-12">
                <provider.Logo />
              </div>

              {/* Speed tag */}
              <span className="relative z-10 text-[10px] font-body font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5">
                {provider.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <ShieldCheck className="w-4 h-4 text-primary" />
            All transactions are protected with 256-bit SSL encryption. Funds available instantly.
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
