import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Sparkles } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-body font-medium">Premier USDT Trading</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 md:mb-6 text-foreground leading-tight">
              Welcome to Our <span className="text-gradient-blue">USDT Trading</span> Platform
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Welcome to our premier USDT trading, where your financial aspirations become our mission.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              We offer real-time insights and support, allowing you to trade with confidence. Join us today and discover how we can transform your trading experience into a profitable journey!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-4"
          >
            {[
              { icon: TrendingUp, title: "Real-Time Insights", desc: "Access live market data and analytics to make informed trading decisions instantly." },
              { icon: ShieldCheck, title: "Secure & Reliable", desc: "Your funds are protected with enterprise-grade security and segregated accounts." },
              { icon: Sparkles, title: "Profitable Journey", desc: "Our platform is designed to help you maximize returns with cutting-edge tools." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex gap-4 bg-card rounded-xl p-5 border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
