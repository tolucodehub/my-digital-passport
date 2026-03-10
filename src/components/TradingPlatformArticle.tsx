import { motion } from "framer-motion";
import { BarChart3, LineChart, ShieldCheck, History, Bot } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Data Analysis", desc: "Auxiliary systems gather and analyze vast amounts of market data, identifying patterns and trends that may not be immediately visible." },
  { icon: LineChart, title: "Signal Generation", desc: "Generate trading signals based on predefined criteria — price movements, volume changes, and other relevant indicators." },
  { icon: ShieldCheck, title: "Risk Management", desc: "Assess potential risks, set appropriate stop-loss and take-profit levels, ultimately protecting your investments." },
  { icon: History, title: "Backtesting & Optimization", desc: "Backtest strategies against historical data to refine approaches and optimize for better real-time performance." },
  { icon: Bot, title: "Algorithmic Trading", desc: "Execute trades automatically based on specific criteria, processing information faster than humanly possible." },
];

export default function TradingPlatformArticle() {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Understanding a <span className="text-gradient-blue">Sophisticated</span> Trading Platform
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            In today's fast-paced financial markets, having access to a reliable trading platform is crucial. Our platform leverages multiple auxiliary trading systems to analyze stock market signals, enhancing efficiency and increasing consistent earnings.
          </p>
        </motion.div>

        {/* What is USDT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 border border-border/50 mb-10 shadow-sm"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">
            What is <span className="text-gradient-blue">USDT</span>?
          </h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            USDT (Tether) is the leading stablecoin designed to maintain a 1:1 peg with the U.S. dollar. It provides a stable, low-volatility store of value within the crypto market, used for trading, remittances, and hedging. USDT is issued by Tether Limited and operates across multiple blockchains.
          </p>
        </motion.div>

        {/* Auxiliary Trading Systems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            The Role of <span className="text-gradient-blue">Auxiliary Trading Systems</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-3">Achieving High Success Rates</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            By utilizing a trading platform with multiple auxiliary trading systems, traders can significantly enhance their chances of success. The integration of advanced analytics, automated trading signals, and robust risk management practices results in a comprehensive trading experience with a high success rate. As the financial landscape evolves, leveraging such technology is essential for maximizing your trading potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
