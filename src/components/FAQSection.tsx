import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How do I open a trading account?",
    a: "Opening an account takes just 3 minutes. Click 'Open Account', fill in your personal details, upload a valid ID, and you're ready to trade. Our team reviews applications within 24 hours.",
  },
  {
    q: "Is my money safe with CoinMarketCap?",
    a: "Absolutely. Client funds are held in segregated accounts at tier-1 banks. We use military-grade encryption and are fully regulated. Your funds are protected up to $500,000 under our insurance policy.",
  },
  {
    q: "What instruments can I trade?",
    a: "USDT (Tether) is the leading stablecoin, a type of Stock designed to maintain a 1:1 peg with the U.S. dollar. It provides a stable, low-volatility store of value within the crypto market, used for trading, remittances, and hedging. USDT is issued by Tether Limited and operates across multiple blockchains.",
  },
  {
    q: "How fast are withdrawals processed?",
    a: "We pride ourselves on fast withdrawals. E-wallet withdrawals are processed within 2 hours, while bank transfers take 1-3 business days. There are no hidden fees on withdrawals.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className="font-display font-semibold text-foreground text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground font-body text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
