import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Noto_Sans_TC } from "next/font/google";
import { Lato } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import Footers from "@/components/Footer";


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

export const metadata = {
  title: "Jo-Chuan's Portfolio",
  description: "Jo-Chuan's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-brand-bg" suppressHydrationWarning>
      <head><script
        id="theme-switcher"
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
        }}
      /></head>
      <body
        className={`${notoTC.variable} ${lato.variable} font-main antialiased selection:bg-brand-secondary selection:text-brand-bg`}
      >
        <CustomCursor />


        <NavBar />

        <div className="fixed inset-0 z-500 hidden flex-col items-center justify-center bg-brand-bg text-brand-text p-6 max-lg:landscape:flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9 1H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h1v-3H3V3h6v8h2V3a2 2 0 0 0-2-2m14 20v-6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2M9 21v-6h12v6zm14-11h-1.5c0-3-1.81-5.73-4.58-6.91L16 5l-2-4a9 9 0 0 1 9 9" /></svg>
          {/* Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE */}

          <p className="text-center text-brand-text mt-4 text-[14px]">
            為了獲得最佳的瀏覽體驗<br />請將裝置轉為直式觀看
          </p>
        </div>


        {children}

        <Footers />

      </body>
    </html>
  );
}
