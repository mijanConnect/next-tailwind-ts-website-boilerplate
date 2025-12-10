import "./globals.css";
import type { ReactNode } from "react";
import Providers from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Next + RTK + Tailwind v4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[--background] text-[--foreground]">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
