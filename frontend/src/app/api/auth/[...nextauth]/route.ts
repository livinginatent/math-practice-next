import { connectMongoDB } from "@/app/lib/db/mongodb";
import User from "@/app/models/userModel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }:any) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.userRank = user.userRank;
        token.userStats = user.userStats;
      }
      return token;
    },

    async session({ session, token }:any) {
      session.user.id = token.id;
      session.user.username = token.username;
      session.user.userRank = token.userRank;
      session.user.userStats = token.userStats;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
