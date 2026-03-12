import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Flame, Activity, BarChart3 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const cryptos = [
  { rank: 1, name: "Bitcoin", symbol: "BTC", price: 68240.50, change1h: 0.12, change24h: 3.62, change7d: -0.98, marketCap: 1_372_766_217_272, volume: 49_751_453_620, color: "#F7931A" },
  { rank: 2, name: "Ethereum", symbol: "ETH", price: 2001.02, change1h: -0.93, change24h: -3.01, change7d: 2.50, marketCap: 241_507_741_689, volume: 23_110_515_444, color: "#627EEA" },
  { rank: 3, name: "Tether", symbol: "USDT", price: 1.00, change1h: 0.00, change24h: -0.01, change7d: 0.00, marketCap: 183_956_491_769, volume: 91_300_993_371, color: "#26A17B" },
  { rank: 4, name: "BNB", symbol: "BNB", price: 636.85, change1h: 0.26, change24h: -3.65, change7d: -0.47, marketCap: 86_840_391_664, volume: 1_629_810_946, color: "#F3BA2F" },
  { rank: 5, name: "XRP", symbol: "XRP", price: 1.36, change1h: -0.54, change24h: -1.43, change7d: -2.51, marketCap: 83_547_080_557, volume: 2_491_468_398, color: "#23292F" },
  { rank: 6, name: "Solana", symbol: "SOL", price: 185.67, change1h: -0.18, change24h: -4.41, change7d: 2.65, marketCap: 48_903_621_868, volume: 4_187_906_059, color: "#9945FF" },
  { rank: 7, name: "Dogecoin", symbol: "DOGE", price: 0.09062, change1h: 0.60, change24h: -1.34, change7d: -4.43, marketCap: 15_320_972_608, volume: 1_147_356_704, color: "#C2A633" },
  { rank: 8, name: "Cardano", symbol: "ADA", price: 0.2550, change1h: -0.85, change24h: -1.68, change7d: -9.12, marketCap: 9_204_711_508, volume: 533_294_244, color: "#0033AD" },
];

const globalStats = [
  { label: "Market Cap", value: "$2.35T", change: "+3.11%", positive: true, icon: BarChart3 },
  { label: "24h Volume", value: "$108.3B", change: "+46.94%", positive: true, icon: Activity },
  { label: "BTC Dominance", value: "58.5%", change: null, positive: true, icon: Flame },
  { label: "Fear & Greed", value: "22", change: "Fear", positive: false, icon: Activity },
];

function formatNumber(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  return `$${n.toLocaleString()}`;
}

function formatPrice(n: number): string {
  if (n >= 1) return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return `$${n.toFixed(4)}`;
}

function ChangeCell({ value }: { value: number }) {
  const positive = value >= 0;
  return (
    <span className={`flex items-center gap-0.5 text-sm font-medium ${positive ? "text-emerald-500" : "text-destructive"}`}>
      {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
      {Math.abs(value).toFixed(2)}%
    </span>
  );
}

// Simple mini sparkline SVG
function MiniChart({ positive }: { positive: boolean }) {
  const points = positive
    ? "0,20 10,18 20,15 30,17 40,12 50,14 60,8 70,10 80,5 90,7 100,3"
    : "0,5 10,7 20,10 30,8 40,14 50,12 60,18 70,15 80,20 90,17 100,22";
  return (
    <svg viewBox="0 0 100 25" className="w-[100px] h-[30px]">
      <polyline
        points={points}
        fill="none"
        stroke={positive ? "hsl(152, 69%, 53%)" : "hsl(0, 84%, 60%)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CryptoMarketTable() {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Global Stats Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12"
        >
          {globalStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              custom={i}
              className="bg-card rounded-xl md:rounded-2xl p-4 md:p-5 border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground font-body">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg md:text-2xl font-display font-bold text-foreground">{stat.value}</span>
                {stat.change && (
                  <span className={`text-xs font-medium ${stat.positive ? "text-emerald-500" : "text-destructive"}`}>
                    {stat.change}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} custom={0} className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Today's Cryptocurrency <span className="text-gradient-blue">Prices</span>
          </motion.h2>
          <motion.p variants={fadeInUp} custom={1} className="text-muted-foreground font-body max-w-lg mx-auto">
            Track real-time prices, market cap, volume, and trends for the top cryptocurrencies.
          </motion.p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left text-xs font-body font-semibold text-muted-foreground px-5 py-4">#</th>
                  <th className="text-left text-xs font-body font-semibold text-muted-foreground px-5 py-4">Name</th>
                  <th className="text-right text-xs font-body font-semibold text-muted-foreground px-5 py-4">Price</th>
                  <th className="text-right text-xs font-body font-semibold text-muted-foreground px-5 py-4 hidden sm:table-cell">1h %</th>
                  <th className="text-right text-xs font-body font-semibold text-muted-foreground px-5 py-4">24h %</th>
                  <th className="text-right text-xs font-body font-semibold text-muted-foreground px-5 py-4 hidden md:table-cell">7d %</th>
                  <th className="text-right text-xs font-body font-semibold text-muted-foreground px-5 py-4 hidden lg:table-cell">Market Cap</th>
                  <th className="text-right text-xs font-body font-semibold text-muted-foreground px-5 py-4 hidden lg:table-cell">Volume (24h)</th>
                  <th className="text-right text-xs font-body font-semibold text-muted-foreground px-5 py-4 hidden xl:table-cell">Last 7 Days</th>
                </tr>
              </thead>
              <tbody>
                {cryptos.map((coin, i) => (
                  <motion.tr
                    key={coin.symbol}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                  >
                    <td className="px-5 py-4 text-sm text-muted-foreground font-body">{coin.rank}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ background: coin.color }}
                        >
                          {coin.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="font-display font-semibold text-sm text-foreground">{coin.name}</div>
                          <div className="text-xs text-muted-foreground font-body">{coin.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right font-display font-semibold text-sm text-foreground">
                      {formatPrice(coin.price)}
                    </td>
                    <td className="px-5 py-4 text-right hidden sm:table-cell">
                      <ChangeCell value={coin.change1h} />
                    </td>
                    <td className="px-5 py-4 text-right">
                      <ChangeCell value={coin.change24h} />
                    </td>
                    <td className="px-5 py-4 text-right hidden md:table-cell">
                      <ChangeCell value={coin.change7d} />
                    </td>
                    <td className="px-5 py-4 text-right text-sm text-foreground font-body hidden lg:table-cell">
                      {formatNumber(coin.marketCap)}
                    </td>
                    <td className="px-5 py-4 text-right text-sm text-foreground font-body hidden lg:table-cell">
                      {formatNumber(coin.volume)}
                    </td>
                    <td className="px-5 py-4 text-right hidden xl:table-cell">
                      <div className="flex justify-end">
                        <MiniChart positive={coin.change7d >= 0} />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
