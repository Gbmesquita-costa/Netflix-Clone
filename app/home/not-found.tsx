"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { NetflixNotFoundPage } from "@/app/assets/pageNotFoundHandlings";

export default function NotFound(): JSX.Element {
    const { push } = useRouter()

    return (
        <>
            <div className="w-full flex flex-col justify-center items-center mt-40">
                <h1 className="text-white text-4xl font-bold px-5 sm:px-0 text-center">
                    Unable to find the selected page
                </h1>

                <h2 className="text-zinc-400 text-lg px-5 sm:px-0 mt-3">
                    Unfortunately we cannot find this page
                </h2>

                <NetflixNotFoundPage/>

                <div className="mt-6">
                    <Button
                        variant={"outline"}
                        type="submit"
                        className="p-7 w-80"
                        onClick={() => push("/")}
                    >
                        Back to home page
                    </Button>
                </div>
            </div>
        </>
    )
}