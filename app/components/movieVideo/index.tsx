import prisma from "../../utils/db";
import { MovieButtons } from "../movieButtons";

export async function MovieVideo(): Promise<JSX.Element> {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
      youtubeString: true
    }
  })

  return (
    <div className="h-[50vh] xl:h-[60vh] w-full flex justify-start items-center">
      <video
        poster={data?.imageString}
        autoPlay={true}
        loop={true}
        src={data?.videoSource}
        className="w-full absolute right-0 left-0 h-screen object-cover -z-10 brightness-[60%]"
      />
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>

        <p className="text-white text-lg mt-5 line-clamp-3">
          {data?.overview}
        </p>

        <div className="flex gap-x-3 mt-4">
          <MovieButtons
            age={data?.age as number}
            duration={data?.duration as number}
            id={data?.id as number}
            overview={data?.overview as string}
            releaseDate={data?.release as number}
            title={data?.title as string}
            youtubeUrl={data?.youtubeString as string}
            key={data?.id}
          />
        </div>
      </div>
    </div>
  )
}