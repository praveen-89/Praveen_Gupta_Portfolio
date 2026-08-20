"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { PageLoader } from "@/components/layout/page-loader";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <PageLoader />
      {children}
    </ThemeProvider>
  );
}
