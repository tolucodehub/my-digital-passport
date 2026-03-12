import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Zap, BarChart3, Users, ArrowRight, ChevronRight, TrendingUp, Globe2 } from "lucide-react";
import traderHero from "@/assets/trader-hero.png";
import devicesShowcase from "@/assets/devices-showcase.png";
import cmcLogo from "@/assets/cmc-logo.png";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PaymentSection from "@/components/PaymentSection";
import EasyStartSection from "@/components/EasyStartSection";
import CryptoMarketTable from "@/components/CryptoMarketTable";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import WelcomeSection from "@/components/WelcomeSection";
import PromoBanner from "@/components/PromoBanner";
import TradingPlatformArticle from "@/components/TradingPlatformArticle";

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
  { value: "34.7K+", label: "Total Users" },
  { value: "$321.4M+", label: "Total Deposit" },
  { value: "928", label: "Exchanges" },
  { value: "1.23T+", label: "Total Withdrawal" },
];

const ticker = ["BTC $68,240 ▲3.62%", "ETH $2,001 ▼3.01%", "BNB $636.85 ▼3.65%", "XRP $1.36 ▼1.43%", "SOL $185.67 ▼4.41%", "DOGE $0.0906 ▼1.34%", "ADA $0.2550 ▼1.68%", "DOT $4.32 ▲2.15%"];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border/50 shadow-sm"
      >
        <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <img src={cmcLogo} alt="CoinMarketCap" className="w-8 h-8 rounded-lg object-contain" />
            <span className="font-display text-xl font-bold text-foreground">
              Coin<span className="text-gradient-blue">MarketCap</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Features</a>
            <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Markets</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Testimonials</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative group">
              <button className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary/80 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <Globe2 className="w-4.5 h-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-44 bg-card border border-border/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                {[
                  { code: "en", label: "English" },
                  { code: "es", label: "Español" },
                  { code: "fr", label: "Français" },
                  { code: "de", label: "Deutsch" },
                  { code: "zh", label: "中文" },
                  { code: "ar", label: "العربية" },
                  { code: "pt", label: "Português" },
                  { code: "ja", label: "日本語" },
                ].map((lang) => (
                  <button
                    key={lang.code}
                    className="w-full text-left px-4 py-2.5 text-sm font-body text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <Link to="/register">
              <Button variant="hero" size="sm" className="md:size-lg text-xs md:text-sm">
                Open Account <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Ticker */}
      <div className="fixed top-[72px] left-0 right-0 z-40 bg-secondary/80 backdrop-blur-sm border-b border-border/30 overflow-hidden py-2">
        <div className="animate-ticker flex whitespace-nowrap gap-8">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="text-xs font-body text-muted-foreground font-medium">{item}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-28 md:pt-32 pb-10 md:pb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
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

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-[1fr_auto] md:grid-cols-2 gap-4 md:gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="min-w-0">
              <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs md:text-sm text-primary font-body font-medium">Trusted by 150,000+ Traders</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} custom={1} className="text-2xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-3 md:mb-6 text-foreground">
                Premier <span className="text-gradient-blue">USDT</span> Trading
              </motion.h1>
              <motion.p variants={fadeInUp} custom={2} className="text-sm md:text-xl text-muted-foreground font-body max-w-xl mb-3 md:mb-6 leading-relaxed">
                Welcome to our premier USDT trading, where your financial aspirations become our mission.
              </motion.p>
              <motion.div variants={fadeInUp} custom={2.5} className="inline-flex items-center gap-2 bg-primary/15 rounded-xl px-3 py-2 md:px-4 md:py-2.5 mb-4 md:mb-10 border border-primary/30">
                <span className="text-xs md:text-base text-primary font-body font-semibold">🎁 Promo code: <span className="text-accent font-bold">$99.9</span> bonus!</span>
              </motion.div>
              <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap gap-2 md:gap-3">
                <Link to="/register">
                  <Button variant="hero" size="lg" className="text-xs md:text-base px-4 py-4 md:px-8 md:py-6">
                    Start Trading <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5" />
                  </Button>
                </Link>
                <Button variant="heroOutline" size="lg" className="text-xs md:text-base px-4 py-4 md:px-8 md:py-6">
                  Markets <ChevronRight className="w-3.5 h-3.5 md:w-5 md:h-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative flex justify-center w-36 sm:w-56 md:w-full"
            >
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <img src={traderHero} alt="Trader using mobile phone with stock charts" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                className="bg-card rounded-xl md:rounded-2xl p-4 md:p-8 text-center shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-500"
              >
                <div className="text-2xl md:text-4xl font-display font-bold text-gradient-blue mb-1 md:mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Why Choose <span className="text-gradient-blue">CoinMarketCap</span>
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card rounded-2xl p-8 group shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Devices Showcase */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-10 text-center text-foreground"
            >
              Trade on <span className="text-gradient-blue">Any Device</span>
            </motion.h2>
            <motion.img
              src={devicesShowcase}
              alt="PocketBroker platform on mobile, tablet, and desktop"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Welcome */}
      <WelcomeSection />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Crypto Market Table */}
      <CryptoMarketTable />

      {/* Portfolio Showcase */}
      <PortfolioShowcase />

      {/* Social Trading + Easy Start */}
      <SocialTradingSection />

      {/* Trading Platform Article */}
      <TradingPlatformArticle />

      {/* Payments */}
      <PaymentSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

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
                Join thousands of traders who trust CoinMarketCap. Open your account in minutes.
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
      <Footer />
    </div>
  );
}
