"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle, Volume2, VolumeX } from "lucide-react";

import { PlayVideoModal } from "../playVideoModal";

interface MovieButtonsProps {
  data: {
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
}

export function MovieButtons({
  data
}: MovieButtonsProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(false)

  const handleMutedVideoBackground = () => {
    setIsMuted(!isMuted)
  }

  return (
    <>
      <video
        poster={data?.imageString}
        autoPlay={true}
        loop={true}
        muted={isMuted}
        src={data?.videoSource}
        className="w-full absolute right-0 left-0 h-screen object-cover -z-10 brightness-[60%]"
      />
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {
            data ? data?.title : "What you are looking for does not exist or has not been added recently"
          }
        </h1>

        <p className="text-white text-lg mt-5 line-clamp-3">
          {data?.overview}
        </p>

        <div className="flex flex-wrap gap-3 mt-4">
          <Button onClick={() => setOpen(true)} className="text-sm md:text-lg font-medium">
            <PlayCircle className="mr-2 h-6 w-6" /> Play
          </Button>

          <Button
            onClick={() => setOpen(true)}
            className="text-sm md:text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
          >
            <InfoIcon className="mr-2 h-6 w-6" /> Learn More
          </Button>

          <Button
            className="text-sm md:text-lg font-medium text-white"
            variant={"ghost"}
            onClick={handleMutedVideoBackground}
          >
            {
              isMuted ? <VolumeX className="h-6 w-6"/>:
              <Volume2 className="h-6 w-6" /> 
            }
          </Button>

          <PlayVideoModal
            state={open}
            changeState={setOpen}
            age={data.age}
            duration={data.duration}
            key={data.id}
            overview={data.overview}
            release={data.release}
            title={data.title}
            youtubeUrl={data.youtubeString}
          />
        </div>
      </div>
    </>
  )
}