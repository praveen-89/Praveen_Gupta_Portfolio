"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { GA_MEASUREMENT_ID, trackPageView, trackEvent } from "@/lib/analytics";

function GAInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname + searchParams.toString());
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Track clicks on buttons and links
      const clickable = target.closest("a, button, [role='button']");
      if (clickable) {
        const text = clickable.textContent?.trim() || "unnamed";
        const type = clickable.tagName.toLowerCase();
        const href = clickable.getAttribute("href");
        const id = clickable.id || "no-id";

        trackEvent({
          action: "click",
          category: "engagement",
          label: `${type}: ${text} (${id}) ${href ? `to ${href}` : ""}`,
        });
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GAInner />
    </Suspense>
  );
}
