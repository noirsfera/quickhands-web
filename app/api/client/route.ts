import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, phone } = body

    // Validate required fields
    if (!firstName || !lastName ||  !phone ) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Insert user into database
    const result = await sql`
      INSERT INTO clients (first_name, last_name, phone,  created_at)
      VALUES (${firstName}, ${lastName}, ${phone}, NOW())
      RETURNING id, first_name, last_name, phone
    `

    return NextResponse.json({
      success: true,
      user: result[0],
    })
  } catch (error) {
    console.error("[v0] Onboarding error:", error)
    return NextResponse.json({ error: "Failed to create user profile" }, { status: 500 })
  }
}
