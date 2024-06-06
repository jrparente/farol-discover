import Navbar from "@/components/navbar";
import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farol Discover - Authentic Walking and Trekking Tours in Portugal",
  description:
    "Explore the unseen beauty of Portugal with Farol Discover. Join us for authentic walking and trekking tours that take you off the beaten path.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex flex-col min-h-screen overflow-auto">
            <div className="flex-grow mx-auto w-full">
              {children}
              <Toaster />
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-B5XVLF3C8L" />
    </html>
  );
}
