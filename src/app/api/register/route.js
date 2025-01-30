import { NextResponse } from "next/server"
import { connectToDatabase } from "../../../lib/db"
import { User } from "../../../lib/models/User"
// import { connectToDatabase } from "@/lib/db"
// import { User } from "@/models/User"
import { hash } from "bcryptjs"

export async function POST(request) {
  try {
    await connectToDatabase()
    
    const { email, password, name } = await request.json()

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await User.findOne({ email }).select('_id')
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      role: 'trainee'
    })

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}