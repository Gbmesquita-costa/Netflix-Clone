import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/utils/db";

export async function POST(req: NextRequest) {
    const { userId } = await req.json()

    const url = new URL(req.url)
    const searchParam = url.searchParams.get("q")

    if (typeof searchParam !== "string") {
        throw new Error("Invalid request")
    }

    const searchForMovies = await prisma.movie.findMany({
        where: {
            OR: [
                {
                    category: {
                        contains: searchParam,
                        mode: "insensitive"
                    }
                },
                {
                    title: {
                        contains: searchParam,
                        mode: "insensitive"
                    }
                }
            ]
        },
        select: {
            age: true,
            duration: true,
            id: true,
            release: true,
            imageString: true,
            overview: true,
            youtubeString: true,
            title: true,
            WatchLists: {
                where: {
                    userId: userId
                }
            }
        }
    })

    return NextResponse.json({ movies: searchForMovies })
}