import "./global.css";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { MediaPlayerControls } from "components/media-player-controls";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Sidebar from "../components/sidebar";

const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luis Ignacio Cabezas Collantes",
    template: "%s | Nacho Collantes",
  },
  description: "Desarrollador de software",
  openGraph: {
    title: "Luis Ignacio Cabezas Collantes",
    description: "Desarrollador de software",
    url: "https://luisignacio.cc",
    siteName: "Luis Ignacio Cabezas Collantes",
    images: [
      {
        url: "https://luisignacio.cc/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Luis Ignacio Cabezas Collantes",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "caCuJ3RQu4O-bvlPtfvhadBhBxZfQpjCOIyP_T2Ar5E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        kaisei.variable,
      )}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
          <MediaPlayerControls />
        </main>
      </body>
    </html>
  );
}
