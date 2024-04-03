import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

import "../../static/js/resources/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css";
import "../../static/js/resources/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";
import "../../static/css/owlCarousel.css";

import Script from "next/script";
import Chat from "@/components/Chat/Chat";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Freecash",
  description: "Naya app by nischal and sujan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="../../static/js/resources/jquery.js"></Script>
        <Script src="../../static/js/owlCarousel.js"></Script>
        <Script src="../../static/js/resources/OwlCarousel2-2.3.4/dist/owl.carousel.js"></Script>
        <Script src="../../static/js/sidebar.js"></Script>
      </body>
    </html>
  );
}
