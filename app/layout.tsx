import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { Toaster } from "sonner";   // ✅ ADD THIS
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}

        {/* ✅ THIS ENABLES TOAST UI */}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
