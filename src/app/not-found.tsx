import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
        Error 404
      </p>
      <h1 className="text-6xl sm:text-8xl font-black gradient-text mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold mb-3">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-105"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
