import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import GoogleAnalytics from "@/components/analytics/google-analytics";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Praveen Gupta | Full Stack Developer & AI/ML Engineer",
    template: "%s | Praveen Gupta",
  },
  description:
    "Full Stack Developer and AI/ML Engineer specializing in scalable web applications, intelligent automation, and machine learning. B.Tech CSE graduate passionate about building real-world solutions.",
  keywords: [
    "Praveen Gupta",
    "Full Stack Developer",
    "AI ML Engineer",
    "Next.js",
    "React",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Praveen Gupta" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Praveen Gupta Portfolio",
    title: "Praveen Gupta | Full Stack Developer & AI/ML Engineer",
    description:
      "Full Stack Developer and AI/ML Engineer specializing in scalable web applications and intelligent automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Gupta | Full Stack Developer & AI/ML Engineer",
    description:
      "Full Stack Developer and AI/ML Engineer specializing in scalable web applications and intelligent automation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </Providers>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
