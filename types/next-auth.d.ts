import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'
import { JWT as DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User extends DefaultUser {
    accessToken: string;
    refreshToken: string;
  };
  interface Session extends DefaultSession {
    user: User;
  };
};

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    accessToken: string;
    refreshToken: string;
  };
};