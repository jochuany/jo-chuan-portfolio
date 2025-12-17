import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jo-Chuan's Portfolio",
  description: "Jo-Chuan's Portfolio Website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#f2efdf]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >


        <NavBar />


        {children}

        <div className="flex justify-center items-center w-screen h-[50px] text-[#1a2690] bg-[#f2efdf] border-t">
          <div className="flex w-[90%] justify-between text-[12px] font-bold">
            <div>DESIGN BY JOCHUAN.</div>
            <div>2025</div>
          </div>
        </div>

      </body>
    </html>
  );
}
