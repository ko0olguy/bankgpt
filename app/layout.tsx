export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { PHProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

// const PostHogPageView = d(() => import("./PostHogPageView"), {
//   ssr: false,
// });

export const metadata: Metadata = {
  title: "BankGPT",
  description: "BankGPT is a modern banking platform for everyone",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <PHProvider> */}
        <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
          {/* <PostHogPageView /> */}
          {children}
        </body>
      {/* </PHProvider> */}
    </html>
  );
}
