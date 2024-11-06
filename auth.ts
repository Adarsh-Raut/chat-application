
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import bcrypt from "bcrypt"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./app/lib/zod"
// import { saltAndHashPassword } from "@/utils/password"
// import { getUserFromDb } from "@/utils/db"
 
export const { handlers, auth } = NextAuth({
  providers: [Google,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null
 
          const { email, password } = await signInSchema.parseAsync(credentials)
 
          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password)
          if (email === "johndoe" && password === "secret") {
            user = { id: 1, name: "John Doe", email }
          }
 
          // logic to verify if the user exists
          // user = await getUserFromDb(email, pwHash)
          // if (user && bcrypt.compareSync(password, user.passwordHash)) {
          //   return { id: user.id, name: user.name, email: user.email }
          // }
 
          if (!user) {
            throw new Error("Invalid credentials.")
          }
 
          // return JSON object with the user data
          return user
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      },
    }),
  ],
})