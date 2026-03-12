import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MousePointerClick, MailCheck, ShieldCheck, Smartphone, ArrowRight, CheckCircle2
} from "lucide-react";

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

const gettingStartedSteps = [
  {
    icon: MousePointerClick,
    color: "from-blue-400 to-cyan-400",
    title: "Create Your Account in Seconds",
    desc: "Join thousands of traders with a simple, fast sign-up — no paperwork, no waiting.",
  },
  {
    icon: MailCheck,
    color: "from-purple-400 to-pink-400",
    title: "Receive Registration Confirmation Code",
    desc: "A secure confirmation code will be sent to your email to verify your identity instantly.",
  },
  {
    icon: ShieldCheck,
    color: "from-emerald-400 to-teal-400",
    title: "Receive Your Secured Account Details",
    desc: "Get your unique login credentials delivered securely — ready to access your account.",
  },
  {
    icon: Smartphone,
    color: "from-orange-400 to-amber-400",
    title: "Install the CoinMarketCap App to Login",
    desc: "Download the official CoinMarketCap application, log in, and start trading on the go.",
  },
];

export default function EasyStartSection() {
  return (
    <section className="py-12 md:py-28 relative overflow-hidden bg-secondary/40">
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
          className="text-center mb-8 md:mb-20"
        >
          <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-5 border border-primary/20">
            <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary font-body font-medium">Simple. Fast. Rewarding.</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-2xl md:text-6xl font-display font-bold mb-3 md:mb-5 text-foreground">
            An Easy Way to <span className="text-gradient-blue">Start</span>
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="text-sm md:text-lg text-muted-foreground font-body max-w-xl mx-auto">
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
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative z-10">
            {gettingStartedSteps.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon circle */}
                <div className="relative mb-4 md:mb-6">
                  <div className={`w-16 h-16 md:w-[104px] md:h-[104px] rounded-full bg-gradient-to-br ${item.color} p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <item.icon className="w-5 h-5 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  {/* Step badge */}
                  <span className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-5 h-5 md:w-7 md:h-7 rounded-full bg-primary text-primary-foreground text-[10px] md:text-xs font-display font-bold flex items-center justify-center shadow-md">
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
  );
}
