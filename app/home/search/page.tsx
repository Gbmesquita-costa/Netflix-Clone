"use client"

import Image from "next/image";

import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

import { Loader2 } from "lucide-react";

import { MovieCard } from "@/app/components/movieCard";
import { getSession } from "next-auth/react";

interface WhatchListProps {
    id: string;
    userId: string;
    movieId: number;
}

interface MovieProps {
    id: number;
    age: number;
    category: string;
    duration: number;
    imageString: string;
    overview: string;
    release: number;
    title: string;
    youtubeString: string;
    WatchLists: WhatchListProps[]
}

export default function Search(): JSX.Element {
    const search = useSearchParams()
    const searchQuery = search ? search.get("q") : null

    const queryEncoded = encodeURIComponent(searchQuery || "")

    const { data, isLoading } = useQuery(["searchMovies", queryEncoded], async () => {
        const session = await getSession()

        const response = await fetch(`/api/search?q=${queryEncoded}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(session?.user?.email)
        })

        const movies = await response.json()
        return movies
    }, {
        refetchOnWindowFocus: false
    })

    return (
        <div className="p-5 lg:p-0">
            <h1 className="text-white text-4xl font-bold underline mt-10">
                Looking for: {decodeURIComponent(queryEncoded)}
            </h1>

            {
                data?.movies.length === 0 && (
                    <div className="w-full flex justify-center mt-52">
                        <h2 className="text-zinc-400 text-lg text-center">
                            No result found for {decodeURIComponent(queryEncoded)}
                        </h2>
                    </div>
                )
            }

            {
                isLoading && (
                    <div className="w-full flex justify-center mt-52">
                        <Loader2 
                            className="animate-spin" 
                            size={64}
                            color="red"
                        />
                    </div>
                )
            }

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8 gap-6 mb-24">
                {
                    data?.movies.map((movie: MovieProps) => (
                        <div key={movie.id} className="relative h-60">
                            <Image
                                src={movie.imageString}
                                alt="Movie"
                                width={500}
                                height={400}
                                className="rounded-sm absolute w-full h-full object-cover"
                            />
                            <div className="h-60 relative z-10 w-full transform transition duration-500 scale-100 hover:md:scale-125 opacity-0 hover:opacity-100">
                                <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                                    <Image
                                        src={movie.imageString}
                                        alt="Movie"
                                        width={800}
                                        height={800}
                                        className="absolute w-full h-full -z-10 rounded-lg object-cover"
                                    />

                                    <MovieCard
                                        key={movie.id}
                                        age={movie.age}
                                        searchMovie={true}
                                        movieId={movie.id}
                                        overview={movie.overview}
                                        time={movie.duration}
                                        title={movie.title}
                                        wachtListId={movie.WatchLists[0]?.id}
                                        watchList={movie.WatchLists.length > 0 ? true : false}
                                        year={movie.release}
                                        youtubeUrl={movie.youtubeString}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}