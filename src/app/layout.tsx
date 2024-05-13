import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";
import "@/app/_styles/reset.css";
import "@/app/_styles/font.css";
import "@/app/_styles/animation.css";
import "@/app/_styles/markdown.css";
import "@/app/_styles/custom.css";
import '@/interface/post';
/* react-grid-layout --------------------------------*/
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
/*-------------------------------- react-grid-layout */



import HeaderComponent from "./_components/HeaderComponent";
import SidebarLeftComponent from "./_components/SideBarLeftComponent";
import SidebarRightComponent from "./_components/SideBarRightComponent";
import FooterComponent from "./_components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dohits.github.io",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      {/* Google Tag Manager 스크립트 [google analytics] */}
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q4M9LNEB4Y"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS}');
            `,
          }}
        ></script>
      </head>
      <body className={inter.className}>
        <HeaderComponent/>
        <div className="dark-mode flex w-full justify-between bg-zinc-950 h-[92vh] overflow-hidden">
          <SidebarLeftComponent/>
            <div className="w-full overflow-y-scroll customScroll font-spoqa p-8">
              {children}
              <FooterComponent/>
            </div>
          <SidebarRightComponent/>
        </div>
      </body>
    </html>
  );
}
