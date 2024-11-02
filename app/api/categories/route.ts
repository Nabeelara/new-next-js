import { NextResponse } from "next/server";

export async function GET() {
    const categories = [
        {
            id: 1,
            name: "Baju"
        },
        {
            id: 2,
            name: "Celana"
        },
        {
            id: 3,
            name: "Sepatu"
        },
        {
            id: 4,
            name: "Topi"
        }
    ]
    
    return NextResponse.json({
        message: "Get data success",
        data: categories
    }, {
        status:200
    })
}