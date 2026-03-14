import { useEffect, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";

declare global {
  interface Window {
    gtranslateSettings?: Record<string, unknown>;
    __gtranslateFloatWidgetLoaded?: boolean;
  }
}

const SCRIPT_ID = "gtranslate-float-script";

interface LanguageTranslateWidgetProps {
  /** When set, the widget renders into this container (for single instance across desktop/mobile). */
  portalTarget?: RefObject<HTMLDivElement | null>;
}

const LanguageTranslateWidget = ({ portalTarget }: LanguageTranslateWidgetProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const ensureWidgetMounted = () => {
      if (wrapperRef.current?.querySelector(".gt_float_switcher")) {
        setIsReady(true);
        return true;
      }
      return false;
    };

    if (typeof window === "undefined") {
      return;
    }

    const settings = {
      default_language: "en",
      detect_browser_language: true,
      wrapper_selector: ".gtranslate_wrapper",
      flag_style: "3d",
      switcher_horizontal_position: "inline",
      switcher_vertical_position: "top",
      float_switcher_open_direction: "bottom",
      custom_css: `
        .gtranslate_wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 9999;
        }
        .gtranslate_wrapper .gt_float_switcher {
          position: relative;
          overflow: visible !important;
          background: transparent !important;
        }
        .gtranslate_wrapper .gt_float_switcher .gt-selected {
          min-width: 120px;
          background: transparent !important;
        }
        .gtranslate_wrapper .gt_float_switcher .gt-lang-code {
          color: white !important;
        }
        @media (max-width: 1023px) {
          .gtranslate_wrapper .gt_float_switcher .gt-selected {
            min-width: 90px;
            font-size: 0.875rem;
          }
          .gtranslate_wrapper .gt-flag img {
            width: 24px !important;
            height: 24px !important;
          }
          .gt_float_switcher img {
            vertical-align: middle;
            display: inline-block;
            width: 24px;
            height: auto;
            margin: 0 5px 0 0;
            border-radius: 3px;
          }
        }
        .gtranslate_wrapper .gt_float_switcher .gt_options {
          position: absolute !important;
          top: calc(100% + 6px);
          left: 0;
          transform: translateY(-8px);
          opacity: 0;
          border-radius: 0.5rem;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 50px -12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          width: max-content;
          min-width: 180px;
          z-index: 2147483647;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .gtranslate_wrapper .gt_float_switcher .gt_options a {
          padding: 0.5rem 0.75rem !important;
        }
        .gtranslate_wrapper .gt_float_switcher .gt_options.gt-open {
          opacity: 1 !important;
          transform: translateY(0) !important;
          pointer-events: auto;
        }
      `,
    };

    window.gtranslateSettings = {
      ...(window.gtranslateSettings || {}),
      ...settings,
    };

    if (typeof window !== "undefined" && (window as Window & { __gtranslate?: { initFloatingWidget: () => void } }).__gtranslate?.initFloatingWidget) {
      (window as Window & { __gtranslate?: { initFloatingWidget: () => void } }).__gtranslate.initFloatingWidget();
    }

    const markLoaded = () => {
      window.__gtranslateFloatWidgetLoaded = true;
    };

    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    const handleScriptLoaded = () => {
      markLoaded();
      const MAX_RETRIES = 20;
      let attempt = 0;
      const timer = window.setInterval(() => {
        attempt += 1;
        if (ensureWidgetMounted() || attempt >= MAX_RETRIES) {
          if (attempt >= MAX_RETRIES && !wrapperRef.current?.querySelector(".gt_float_switcher")) {
            setHasError(true);
          }
          window.clearInterval(timer);
        }
      }, 300);
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      script.onload = () => {
        script.setAttribute("data-gtranslate-loaded", "true");
        handleScriptLoaded();
      };
      script.onerror = () => setHasError(true);
      document.head.appendChild(script);
    } else if (existingScript.getAttribute("data-gtranslate-loaded") === "true") {
      if (!window.__gtranslateFloatWidgetLoaded) {
        markLoaded();
      }
      handleScriptLoaded();
    } else {
      existingScript.addEventListener("load", handleScriptLoaded, { once: true });
      existingScript.addEventListener("error", () => setHasError(true), { once: true });
      return () => {
        existingScript.removeEventListener("load", handleScriptLoaded);
      };
    }
  }, []);

  useEffect(() => {
    if (!wrapperRef.current || isReady) {
      return;
    }

    if (wrapperRef.current.querySelector(".gt_float_switcher")) {
      setIsReady(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (wrapperRef.current?.querySelector(".gt_float_switcher")) {
        setIsReady(true);
        observer.disconnect();
      }
    });

    observer.observe(wrapperRef.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isReady]);

  const content = (
    <div className="relative">
      {!isReady && !hasError && (
        <span className="text-sm text-muted-foreground">Loading language...</span>
      )}
      {hasError && (
        <span className="text-sm text-muted-foreground">Language translation unavailable</span>
      )}

      <div className="gtranslate_wrapper flex items-center gap-2 relative z-[9999]" ref={wrapperRef} />
    </div>
  );

  if (portalTarget?.current) {
    return createPortal(content, portalTarget.current);
  }
  return content;
};

export default LanguageTranslateWidget;
