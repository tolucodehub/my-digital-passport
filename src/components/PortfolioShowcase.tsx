import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolios = [
  { img: portfolio1, name: "Martin Antonio", balance: "$117,306.93", gain: "+4.37%" },
  { img: portfolio2, name: "Henry Nowak", balance: "$56,000.67", gain: "+0.01%" },
  { img: portfolio3, name: "Alexander Owen", balance: "$84,283.16", gain: "+5.55%" },
  { img: portfolio4, name: "Lucia Rodríguez", balance: "$104,303.93", gain: "+5.57%" },
  { img: portfolio5, name: "Sofía Fernández", balance: "$97,298.52", gain: "+5.02%" },
  { img: portfolio6, name: "Evelyn Williams", balance: "$169,262.90", gain: "+3.23%" },
];

export default function PortfolioShowcase() {
  return (
    <section className="py-24 relative bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Real <span className="text-gradient-blue">Trader Portfolios</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            See how our traders are growing their wealth with USDT trading on CoinMarketCap.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {portfolios.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500">
                <img
                  src={p.img}
                  alt={`${p.name}'s portfolio showing ${p.balance}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="text-xs font-display font-semibold text-foreground truncate">{p.name}</div>
                <div className="text-xs text-primary font-bold">{p.balance}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
