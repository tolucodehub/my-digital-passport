import { useState, useRef, useEffect } from "react";
import { Globe2, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-secondary/80 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300"
        aria-label="Select language"
      >
        <Globe2 className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border/50 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-body text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 flex items-center justify-between gap-2"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                {lang.label}
              </span>
              {language === lang.code && (
                <Check className="w-3.5 h-3.5 text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
