import { NetflixPageLoading } from "./assets/pageLoadingHandlings";

export default function Loading(): JSX.Element {
    return (
        <div className="w-full flex justify-center items-center mt-48">
            <NetflixPageLoading />
        </div>
    )
}