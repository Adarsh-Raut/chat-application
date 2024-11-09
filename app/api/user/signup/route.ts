import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import prisma from "@/app/lib/prisma";


//  POST /api/user/signup for user with email and password

// export async function POST(req:Request) {
//     try {
//         const body = await req.json()
//         const { email, username, password } = signInSchema.parse(body)

//         // check if email already exist
//         const existingUserByEmail = await prisma.user.findUnique({
//             where: {email : email}
//         })
//         if (existingUserByEmail) {
//             return new NextResponse('Email already exist', {status: 400})
//         }

//         // check if username already exist
//         const existingUserByUsername = await prisma.user.findUnique({
//             where: {username : username}
//         })
//         if (existingUserByUsername) {
//             return new NextResponse('Username already exist', {status: 400})
//         }

//         // hash password
//         const hashedPassword = await hash(password, 10)

//         const newUser = await prisma.user.create({
//             data: {
//                 email,
//                 username,
//                 password: hashedPassword
//             }
//         })
//         const { password: newPassword, ...newUserWithoutPassword } = newUser
//         return NextResponse.json({ user: newUserWithoutPassword, message: 'User created successfully', status: 201 })
        
//     } catch (error) {
//         if (error instanceof ZodError) {
//             // Return detailed Zod error response
//             return NextResponse.json({ 
//                 message: "Validation error", 
//                 errors: error.errors 
//             }, { status: 400 });
//         }
//         return  NextResponse.json({message: 'Something went wrong'}, {status: 500})
//     }
// }

//  POST /api/user/signup for user with email and password

export async function POST(req:Request) {
    try {
        const body = await req.json()
        const {  username } = body


        // check if username already exist
        const existingUserByUsername = await prisma.user.findUnique({
            where: {username : username}
        })

        if (existingUserByUsername) {
            return  NextResponse.json({ message: "Username already exist", status: 400 })
        }


        const newUser = await prisma.user.create({
            data: {
                username,
            }
        })
        return NextResponse.json({ user: newUser, message: 'User created successfully', status: 201 })
        
    } catch (error) {
       
        return  NextResponse.json({message: 'Something went wrong'}, {status: 500})
    }
}