"use client"

import { ReactNode } from "react";

import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <SessionProvider>
      <NextTopLoader
        color="red"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
      />
      {children}
    </SessionProvider>
  )
}