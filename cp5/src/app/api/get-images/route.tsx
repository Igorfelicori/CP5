import { NextResponse } from "next/server";

const imagesUrl = [
    {id: 1, imagem: "link123"},
    {id: 2, imagem: "link231"},
    {id: 3, imagem: "link32"},
    {id: 4, imagem: "link132"},
    {id: 5, imagem: "link322"},
]

export async function GET() {
    return NextResponse.json(imagesUrl)
}
