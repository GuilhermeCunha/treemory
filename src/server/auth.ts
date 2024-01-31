import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

import prismaClient from "./prisma";
import { RedirectType, redirect } from "next/navigation";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

const PAGES = {
  signIn: "sign-in",
  signUp: "sign-in",
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient) as Adapter,
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: PAGES.signIn,
    signOut: "/",
  },

  session: {
    strategy: "jwt",
  },

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    redirect: async ({ baseUrl, url }) => {
      const destinationUrl = url.startsWith(baseUrl) ? url : `${baseUrl}${url}`;

      return destinationUrl;
    },
    jwt: async ({ token }) => {
      return token;
    },
    async session({ token, session }) {
      if (token && session) {
        session.user = {
          id: token.sub!,
          name: token.name,
          email: token.email,
          image: token.picture,
        };
      }

      return session;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);

export const getServerAuthSessionOrRedirect = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect(PAGES.signIn, RedirectType.push);
  }
  return session;
};
