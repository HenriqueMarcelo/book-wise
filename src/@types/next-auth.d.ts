/* eslint-disable no-unused-vars */
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    email: string
    image: string
  }

  interface Session {
    user: User
  }
}
