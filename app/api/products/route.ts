import { NextResponse } from "next/server";

export async function GET() {
    const products = [
        {
            id: 1,
            name: "Baju",
            price: 50000,
            description: "ini adalah product 1",
        },
        {
            id: 2,
            name: "Celana",
            price: 70000,
            description: "ini adalah product 2",
        },
        {
            id: 3,
            name: "Sepatu",
            price: 90000,
            description: "ini adalah product 3",
        },
        {
            id: 4,
            name: "Topi",
            price: 100000,
            description: "ini adalah product 4",
        }
    ]
    
    return NextResponse.json({
        message: "Get product success",
        data: products
    }, {
        status:200
    })
}