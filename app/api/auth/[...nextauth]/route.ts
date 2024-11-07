import { NextApiHandler } from "next"
import { authOptions } from "@/app/lib/auth"
import NextAuth from "next-auth"

const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions)

export { handler as GET, handler as POST }