"use client"

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";

import { queryClient } from "@/app/services/queryClient";

import { QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </SessionProvider>
  )
}