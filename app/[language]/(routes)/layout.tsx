import "../../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar";
import { i18n } from "@/lib/languages";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farol Discover - Authentic Walking and Trekking Tours in Portugal",
  description:
    "Explore the unseen beauty of Portugal with Farol Discover. Join us for authentic walking and trekking tours that take you off the beaten path.",
  verification: {
    google: "MMefvhg2JlfCub9zE5XsMB_eMrktk58J6jMDLxSKF18",
  },
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params?: { language?: string };
}) {
  let locale = props.params?.language ?? "en-US";
  const allLanguages = i18n.languages;
  const defaultLocale =
    allLanguages.find((lang) => lang.isDefault)?.locale ?? "en-US";
  const defaultLanguage =
    allLanguages.find((lang) => lang.isDefault)?.id ?? "en";

  let language = allLanguages.find((lang) => lang.locale === locale)?.id;

  if (!language) {
    locale = defaultLocale;
    language = defaultLanguage;
  }

  return (
    <html lang={language} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar
            language={language}
            locale={locale}
            defaultLanguage={defaultLanguage}
          />
          <main className="flex flex-col min-h-screen overflow-auto">
            <div className="flex-grow mx-auto w-full">
              {props.children}
              <Toaster />
            </div>
            <Footer language={language} />
          </main>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-B5XVLF3C8L" />
    </html>
  );
}
