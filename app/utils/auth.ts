import type { NextAuthOptions } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import prisma from "./db";

export const authOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ]
} satisfies NextAuthOptions