import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers/nextAuthProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Netflix Clone App",
    template: "Netflix Clone App | %s"
  },
  description: "Netflix Clone App",
  icons: {
    icon: [{ rel: "icon", url: "/favicon.ico" }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}