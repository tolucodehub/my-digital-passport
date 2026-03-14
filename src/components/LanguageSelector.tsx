import { useEffect, useCallback } from "react";
import { Globe2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

/** Map our language codes to Google Translate combo values (e.g. zh -> zh-CN) */
const GOOGLE_LANG_CODE: Record<string, string> = {
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
  zh: "zh-CN",
  ar: "ar",
  pt: "pt",
  ja: "ja",
};

function getGoogleTranslateCombo(): HTMLSelectElement | null {
  return document.querySelector(".goog-te-combo");
}

/** Trigger Google Translate to the given language code (our code, e.g. "en" | "zh"). */
export function triggerGoogleTranslate(langCode: string) {
  const googleCode = GOOGLE_LANG_CODE[langCode] ?? langCode;
  const combo = getGoogleTranslateCombo();
  if (!combo) return;
  if (combo.value === googleCode) return;
  combo.value = googleCode;
  combo.dispatchEvent(new Event("change", { bubbles: true }));
}

/** Read current language from Google Translate cookie so UI can show selection. */
function getGoogleTranslateCookieLang(): string | null {
  const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
  return match ? match[1] : null;
}

/** Map Google cookie value back to our code (e.g. zh-CN -> zh). */
const COOKIE_TO_OUR_CODE: Record<string, string> = {
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
  "zh-CN": "zh",
  "zh-TW": "zh",
  ar: "ar",
  pt: "pt",
  ja: "ja",
};

export default function LanguageSelector() {
  const { language, setLanguage, languages } = useLanguage();

  // Sync our state from Google's cookie on mount and when cookie might change
  const syncFromCookie = useCallback(() => {
    const cookieLang = getGoogleTranslateCookieLang();
    const ourCode = cookieLang ? COOKIE_TO_OUR_CODE[cookieLang] ?? cookieLang : null;
    if (ourCode && languages.some((l) => l.code === ourCode)) {
      setLanguage(ourCode as Parameters<typeof setLanguage>[0]);
    }
  }, [languages, setLanguage]);

  useEffect(() => {
    syncFromCookie();
    // Google Translate may load later; poll briefly for combo then sync
    const t = setInterval(() => {
      if (getGoogleTranslateCombo()) {
        syncFromCookie();
        clearInterval(t);
      }
    }, 200);
    return () => clearInterval(t);
  }, [syncFromCookie]);

  const handleSelect = (code: string) => {
    setLanguage(code as Parameters<typeof setLanguage>[0]);
    triggerGoogleTranslate(code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-secondary/80 hover:bg-primary/10 border border-border/50 hover:border-primary/30"
          aria-label="Select language"
        >
          <Globe2 className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-[11rem] z-[100] rounded-xl border-border/50">
        <DropdownMenuRadioGroup value={language} onValueChange={handleSelect}>
          {languages.map((lang) => (
            <DropdownMenuRadioItem
              key={lang.code}
              value={lang.code}
              className="flex items-center gap-2 cursor-pointer py-2.5 pl-8 pr-3 font-body"
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
