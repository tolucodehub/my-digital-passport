import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PromoBanner() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 relative overflow-hidden"
        >
          <div className="animate-shimmer absolute inset-0 rounded-2xl opacity-30" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Gift className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  Get <span className="text-gradient-blue">$99.9</span> Bonus
                </h3>
                <p className="text-muted-foreground font-body">
                  Register with a promo code to receive your welcome bonus!
                </p>
              </div>
            </div>
            <Link to="/register">
              <Button variant="hero" size="lg" className="text-base px-8 whitespace-nowrap">
                Claim Bonus <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
