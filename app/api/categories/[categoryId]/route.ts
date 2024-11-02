import { NextResponse } from "next/server";

export function GET(
    request: Request,
     {
        params,

     }: {
        params: {
            categoryId: string;
        };
    }
) {
    const categories = [
        {
            id: 1,
            name: "Baju",
        },
        {
            id: 2,
            name: "Celana",
        },
        {
            id: 3,
            name: "Sepatu",
        },
        {
            id: 4,
            name: "Topi",
        }
    ]
    
    const findCategory = categories.find(
        (category) => category.id === Number (params.categoryId)
    );

    return NextResponse.json(
        {
            message: findCategory ? "Get categories success" : " Category not found",
            data: findCategory ?? null,
        },
        {
            status: findCategory ? 200 : 404,
        }
    )
}