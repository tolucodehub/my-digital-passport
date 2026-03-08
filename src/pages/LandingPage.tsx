import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Globe, Zap, BarChart3, Users, ArrowRight, Star, ChevronRight } from "lucide-react";
import traderHero from "@/assets/trader-hero.png";
import devicesShowcase from "@/assets/devices-showcase.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const features = [
  { icon: TrendingUp, title: "Advanced Trading", desc: "Access 200+ instruments across Forex, CFDs, Commodities, and Indices." },
  { icon: Shield, title: "Secure & Regulated", desc: "Your funds are protected with top-tier encryption and segregated accounts." },
  { icon: Globe, title: "Global Markets", desc: "Trade 24/5 across all major financial markets worldwide." },
  { icon: Zap, title: "Lightning Execution", desc: "Ultra-low latency execution with spreads from 0.0 pips." },
  { icon: BarChart3, title: "Pro Analytics", desc: "Real-time charts, indicators, and AI-powered market insights." },
  { icon: Users, title: "Copy Trading", desc: "Follow and copy top-performing traders automatically." },
];

const stats = [
  { value: "$2.5B+", label: "Daily Volume" },
  { value: "150K+", label: "Active Traders" },
  { value: "0.0", label: "Pips Spread" },
  { value: "99.9%", label: "Uptime" },
];

const testimonials = [
  { name: "Michael R.", role: "Professional Trader", text: "The execution speed is unmatched. I've been trading for 12 years and this platform is the best I've used.", stars: 5 },
  { name: "Sarah K.", role: "Day Trader", text: "The copy trading feature changed my life. I'm now consistently profitable following top traders.", stars: 5 },
  { name: "James T.", role: "Portfolio Manager", text: "Institutional-grade tools with a retail-friendly interface. Outstanding platform.", stars: 5 },
];

const ticker = ["EUR/USD 1.0842 ▲", "GBP/USD 1.2715 ▼", "USD/JPY 149.32 ▲", "XAU/USD 2,341.50 ▲", "BTC/USD 67,240 ▲", "ETH/USD 3,520 ▼", "USD/CAD 1.3621 ▼", "AUD/USD 0.6542 ▲"];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-blue flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Pocket<span className="text-gradient-blue">Broker</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Features</a>
            <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Markets</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Testimonials</a>
          </div>
          <Link to="/register">
            <Button variant="hero" size="lg">
              Open Account <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Ticker */}
      <div className="fixed top-[72px] left-0 right-0 z-40 bg-secondary/80 backdrop-blur-sm border-b border-border/30 overflow-hidden py-2">
        <div className="animate-ticker flex whitespace-nowrap gap-8">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="text-xs font-body text-muted-foreground font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        {/* Decorative blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary font-body font-medium">Trusted by 150,000+ Traders Worldwide</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} custom={1} className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-foreground">
                Trade the <span className="text-gradient-blue">World's</span> Markets with Confidence
              </motion.h1>
              <motion.p variants={fadeInUp} custom={2} className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mb-10 leading-relaxed">
                Access global financial markets with institutional-grade tools, ultra-low spreads, and lightning-fast execution.
              </motion.p>
              <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button variant="hero" size="lg" className="text-base px-8 py-6">
                    Start Trading Now <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                  View Markets <ChevronRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={traderHero} alt="Trader using mobile phone with stock charts" className="w-full max-w-lg mx-auto drop-shadow-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-500"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-blue mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Why Choose <span className="text-gradient-blue">PocketBroker</span>
            </motion.h2>
            <motion.p variants={fadeInUp} custom={1} className="text-muted-foreground font-body max-w-lg mx-auto">
              Everything you need to trade like a professional, all in one platform.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                custom={i}
                className="bg-card rounded-2xl p-8 group shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative bg-secondary/50">
        <div className="container mx-auto px-6">
          {/* Devices Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <img
              src={devicesShowcase}
              alt="PocketBroker platform on mobile, tablet, and desktop"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Trusted by <span className="text-gradient-blue">Traders</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                custom={i}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 font-body text-sm mb-6 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <div className="font-display font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground font-body">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-xl"
          >
            <div className="animate-shimmer absolute inset-0 rounded-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">
                Ready to Start Trading?
              </h2>
              <p className="text-primary-foreground/80 font-body max-w-md mx-auto mb-10">
                Join thousands of traders who trust PocketBroker. Open your account in minutes.
              </p>
              <Link to="/register">
                <Button size="lg" className="text-base px-10 py-6 bg-card text-foreground hover:bg-card/90 font-semibold shadow-lg">
                  Open Free Account <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-blue flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-sm font-bold text-foreground">PocketBroker</span>
            </div>
            <p className="text-xs text-muted-foreground font-body text-center max-w-xl">
              Trading involves significant risk. Past performance is not indicative of future results. Please trade responsibly.
            </p>
            <p className="text-xs text-muted-foreground font-body">© 2026 PocketBroker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
