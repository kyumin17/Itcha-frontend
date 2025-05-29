import http from '@/lib/api/http';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

function decodeJwt<T>(token: string): T {
  const [, b64] = token.split('.');
  const json = Buffer.from(b64, 'base64').toString('utf8');
  return JSON.parse(json) as T;
}

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        try {
          const { data } = await http.post('/api/auth/login', {
            username: credentials?.username,
            password: credentials?.password,
          });

          if (data.accessToken && data.refreshToken) {
            const payload = decodeJwt<{ user_id: string }>(data.accessToken);
            return {
              id: payload.user_id,
              name: credentials!.username,
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            };
          }

          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken  = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken!;
      session.user.refreshToken = token.refreshToken!;
      return session;
    }
  },

  pages: {
    signIn: '/login',
    error: '/login',
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };