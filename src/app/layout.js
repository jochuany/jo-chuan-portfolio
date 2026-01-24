import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Noto_Sans_TC } from "next/font/google";
import { Lato } from "next/font/google";

const notoTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ch",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-en",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Jo-Chuan's Portfolio",
  description: "Jo-Chuan's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-brand-bg">
      <body
        className={`${notoTC.variable} ${lato.variable} font-main antialiased`}
      >


        <NavBar />


        {children}

        <div className="flex justify-center items-center w-screen h-[50px] text-brand-text bg-brand-bg border-t">
          <div className="flex w-[90%] md:w-[80%] lg:w-[70%] justify-between text-[12px] font-bold">
            <div>DESIGN BY JOCHUAN.</div>
            <div>2025</div>
          </div>
        </div>

      </body>
    </html>
  );
}
