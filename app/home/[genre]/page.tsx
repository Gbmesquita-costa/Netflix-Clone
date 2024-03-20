import { notFound } from "next/navigation";

import Image from "next/image";
import prisma from "@/app/utils/db";

import { getServerSession } from "next-auth";

import { MovieCard } from "@/app/components/movieCard";
import { authOptions } from "@/app/utils/auth";

interface GenreProps {
  params: {
    genre: string;
  }
}

export async function generateMetadata({ params }: GenreProps) {
  return {
    title: `${params.genre}`
  }
}

async function getData(category: string, userId: string) {
  switch (category) {
    case "shows": {
      const data = await prisma.movie.findMany({
        where: {
          category: "show",
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          WatchLists: {
            where: {
              userId: userId
            }
          }
        }
      })

      return data
    }
    case "movies": {
      const data = await prisma.movie.findMany({
        where: {
          category: "movie",
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

      return data
    }
    case "recently": {
      const data = await prisma.movie.findMany({
        where: {
          category: "recent",
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

      return data
    }
    default: {
      notFound()
    }
  }
}

export default async function CategoryPage({
  params
}: {
  params: { genre: string }
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  const data = await getData(params.genre, session?.user?.email as string)

  const capitalizeWords = (str: string) => {
    // Split the string into words
    const words = str.split(" ")

    // Maps each word by capitalizing the first letter and lowercase the rest of the word
    const capitalizedWords = words.map(word => {
      const lowerCaseWord = word.toLowerCase()
      return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
    })

    return capitalizedWords.join(" ")
  }

  return (
    <div className="p-5 lg:p-0">
      <h1 className="text-white text-4xl font-bold underline mt-10">
        {capitalizeWords(params.genre)}
      </h1>

      {
        data.length === 0 && (
          <div className="w-full flex justify-center mt-52">
            <h2 className="text-zinc-400 text-lg text-center">
              What you are looking for does not exist or has <br /> 
              not been added recently
            </h2>
          </div>
        )
      }

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8 gap-6 mb-24">
        {data.map((movie) => (
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
        ))}
      </div>
    </div>
  )
}