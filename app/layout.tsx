import { Poppins } from "next/font/google";
import "./globals.css";

import Navigation from "./components/navigation";
import { ThemeProvider } from "./context/ThemeContext";
import HeaderReveal from "./components/HeaderReveal";
import Footer from "./components/Footer";
import SocialsAside from "./components/SocialsAside";
import { CookieProvider } from "./context/CookieContext";
import CookieBanner from "./components/CookieBanner";
import CookieSettingsButton from "./components/CookieButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s / UKS Lew Ojrzanów",
    default: "Witaj / UKS Lew Ojrzanów",
  },
  description:
    "Ceryfikowana Akademia Piłki Ręcznej ZPRP, Ośrodek Szkolenia w piłce ręcznej OSPR dziewcząt, Handball Team, Athletic Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${poppins.variable} antialiased `}>
        <ThemeProvider>
          <CookieProvider>
            <HeaderReveal>
              <Navigation />
            </HeaderReveal>
            {children}
            <CookieBanner />
            <CookieSettingsButton />
            <Footer />

            <SocialsAside />
          </CookieProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
