import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  UserCheck, Star, TrendingUp, Award,
  MousePointerClick, FlaskConical, BookOpen, BarChart2, Wallet, ArrowRight, CheckCircle2
} from "lucide-react";
import socialComposite from "@/assets/social-trading-composite.png";

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

const socialSteps = [
  {
    icon: Star,
    step: "01",
    title: "Pick Your Top Trader",
    desc: "Browse our curated leaderboard and handpick elite traders whose strategy aligns with your goals.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Follow & Mirror Their Moves",
    desc: "One tap to follow — every trade they make is automatically mirrored in your portfolio in real time.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Master Market Analysis",
    desc: "Watch, learn, and decode market patterns from seasoned professionals as they trade live.",
  },
  {
    icon: Award,
    step: "04",
    title: "Grow Into a Pro Investor",
    desc: "Build confidence, refine your strategy, and graduate from follower to a market leader yourself.",
  },
];

const gettingStartedSteps = [
  {
    icon: MousePointerClick,
    color: "from-blue-400 to-cyan-400",
    title: "Create Your Account in Seconds",
    desc: "Join thousands of traders with a simple, fast sign-up — no paperwork, no waiting.",
  },
  {
    icon: FlaskConical,
    color: "from-purple-400 to-pink-400",
    title: "Sharpen Skills on a Demo Account",
    desc: "Practice with virtual funds in a real market environment — zero risk, maximum learning.",
  },
  {
    icon: BookOpen,
    color: "from-emerald-400 to-teal-400",
    title: "Unlock Our Knowledge Hub",
    desc: "Dive into expert guides, video tutorials, and live market analysis to accelerate your growth.",
  },
  {
    icon: BarChart2,
    color: "from-orange-400 to-amber-400",
    title: "Trade Smarter with Proven Strategies",
    desc: "Harness powerful tools, market signals, and trend indicators to make data-driven decisions.",
  },
  {
    icon: Wallet,
    color: "from-primary to-accent",
    title: "Fund Your Account & Start Earning",
    desc: "Make a secure deposit with your preferred payment method and put your capital to work today.",
  },
];

export default function SocialTradingSection() {
  return (
    <>
      {/* ── Social Trading Section ── */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -top-40 -left-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-12 md:mb-20"
          >
            <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-5 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-body font-medium">Copy. Follow. Profit.</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-5 text-foreground">
              Social <span className="text-gradient-blue">Trading</span>
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground font-body max-w-xl mx-auto text-lg">
              Let the best traders do the heavy lifting — follow, copy, and grow your portfolio without needing years of experience.
            </motion.p>
          </motion.div>

          {/* Main Content: Images + Steps side-by-side */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left — Composite phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-2xl" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-md mx-auto"
                style={{ filter: "drop-shadow(0 40px 80px hsla(205,85%,50%,0.35))" }}
              >
                <img src={socialComposite} alt="Social trading app showcase" className="w-full object-contain" />
              </motion.div>
            </motion.div>

            {/* Right — 4 steps */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-6"
            >
              {socialSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeInUp}
                  custom={i}
                  whileHover={{ x: 6, transition: { duration: 0.25 } }}
                  className="flex items-start gap-5 group cursor-default"
                >
                  {/* Step number + icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-display font-bold text-primary bg-card border border-primary/30 rounded-full w-5 h-5 flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeInUp} custom={4} className="pt-4">
                <Link to="/register">
                  <Button variant="hero" size="lg" className="px-8 py-6 text-base">
                    Start Copy Trading <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── An Easy Way to Start ── */}
      <section className="py-16 md:py-28 relative overflow-hidden bg-secondary/40">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-12 md:mb-20"
          >
            <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-5 border border-primary/20">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-body font-medium">Simple. Fast. Rewarding.</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-5 text-foreground">
              An Easy Way to <span className="text-gradient-blue">Start</span>
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground font-body max-w-xl mx-auto text-lg">
              Your journey from complete beginner to confident investor has never been this straightforward.
            </motion.p>
          </motion.div>

          {/* Steps grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="relative"
          >
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {gettingStartedSteps.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  custom={i}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className={`w-[104px] h-[104px] rounded-full bg-gradient-to-br ${item.color} p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    {/* Step badge */}
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold flex items-center justify-center shadow-md">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link to="/register">
              <Button variant="hero" size="lg" className="px-10 py-6 text-base">
                Get Started for Free <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
