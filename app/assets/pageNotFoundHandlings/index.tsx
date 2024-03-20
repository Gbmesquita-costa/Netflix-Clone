"use client"

import Lottie from "react-lottie";
import NetflixAnimation from "../lottiesAnimation/netflixErrorAnimation.json";

export function NetflixNotFoundPage(): JSX.Element {
    return (
        <div className="w-full max-w-[300px]">
            <Lottie
                style={{ cursor: "auto" }}
                isClickToPauseDisabled={true}
                options={{
                    autoplay: true,
                    loop: true,
                    animationData: NetflixAnimation
                }}
            />
        </div>
    )
}