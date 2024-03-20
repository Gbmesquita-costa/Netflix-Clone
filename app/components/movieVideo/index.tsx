import prisma from "../../utils/db";
import { MovieButtons } from "../movieButtons";

interface MovieVideoProps {
  title: string;
  id: number;
  imageString: string;
  age: number;
  duration: number;
  overview: string;
  release: number;
  videoSource: string;
  youtubeString: string;
}

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
      <MovieButtons data={data as MovieVideoProps} />
    </div>
  )
}