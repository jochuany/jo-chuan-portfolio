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

        <div className="flex justify-center items-center w-screen h-[60px] text-brand-graytext bg-brand-bg">

          <div className="flex flex-col md:flex-row w-[90%] md:w-[85%] lg:w-[80%] justify-center items-center text-[12px] md:text-[14px] font-medium">

            <a
              href="mailto:ruochuanyang@email.com"
              className="font-bold md:hover:text-brand-primary transition-all duration-300 tracking-wide
                relative inline-block

                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[1.5px]
                after:w-full
                after:bg-brand-primary
                
                after:scale-x-0
                after:origin-left
                
                after:transition-transform
                after:duration-300
                after:ease-out

                md:hover:after:scale-x-100"
            >
              ruochuanyang@gmail.com
            </a>

            <div className="flex">
              <div className="mx-2 hidden md:flex">{" // "}</div>© {new Date().getFullYear()} Jo-Chuan Yang. Built with Next.js
            </div>

          </div>

        </div>

      </body>
    </html>
  );
}
