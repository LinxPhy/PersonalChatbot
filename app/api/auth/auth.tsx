import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export default NextAuth({

    providers: [
        EmailProvider({
            server: process.env.MAIL_SERVER,
            from: 'NextAuth.js <no-reply@example.com>'
        }),
    ]
})