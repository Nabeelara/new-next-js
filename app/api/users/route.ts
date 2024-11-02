import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const db = new PrismaClient();

    const users = await db.user.findMany();

    return NextResponse.json(users, {status: 200});
}