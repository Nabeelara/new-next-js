import { NextResponse } from "next/server";

export function GET(
    request: Request,
     {
        params,

     }: {
        params: {
            productId: string;
        };
    }
) {
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
    
    const findProduct = products.find(
        (product) => product.id === Number(params.productId)
    );

    return NextResponse.json(
        {
            message: findProduct ? "Get categories success" : " Category not found",
            data: findProduct ?? null,
        },
        {
            status: findProduct ? 200 : 404,
        }
    )
}