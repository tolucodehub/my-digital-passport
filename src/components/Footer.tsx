import { motion } from "framer-motion";
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Trading: ["Forex", "Commodities", "Indices", "Cryptocurrencies", "CFDs", "Stocks"],
  Company: ["About Us", "Careers", "Press", "Partners", "Contact"],
  Resources: ["Education Center", "Market Analysis", "Trading Tools", "API Documentation", "Blog"],
  Legal: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "AML Policy", "Cookie Policy"],
};

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="container mx-auto px-6">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                Pocket<span className="text-primary">Broker</span>
              </span>
            </div>
            <p className="text-background/60 font-body text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner in global financial markets. Trade with confidence using institutional-grade technology.
            </p>
            <div className="space-y-3">
              <a href="mailto:support@pocketbroker.com" className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors text-sm font-body">
                <Mail className="w-4 h-4" /> support@pocketbroker.com
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors text-sm font-body">
                <Phone className="w-4 h-4" /> +1 (800) 123-4567
              </a>
              <div className="flex items-center gap-2 text-background/60 text-sm font-body">
                <MapPin className="w-4 h-4 flex-shrink-0" /> 388 Market St, Suite 1300, San Francisco, CA
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm mb-4 text-background/90">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/50 hover:text-primary transition-colors text-sm font-body">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/10" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-xs font-body">
            © 2026 PocketBroker. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <s.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Risk disclaimer */}
        <div className="border-t border-background/10 py-5">
          <p className="text-background/30 text-[11px] font-body leading-relaxed text-center max-w-4xl mx-auto">
            <strong>Risk Warning:</strong> Trading Forex and CFDs involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Past performance is not indicative of future results. PocketBroker is licensed and regulated. Please read our full Risk Disclosure before trading.
          </p>
        </div>
      </div>
    </footer>
  );
}
