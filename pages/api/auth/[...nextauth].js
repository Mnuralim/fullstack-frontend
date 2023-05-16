import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          const user = await axios.post(`${process.env.API_URL}/api/login`, { email, password });
          return user.data.data;
        } catch (error) {
          throw new Error(error.response.data.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
