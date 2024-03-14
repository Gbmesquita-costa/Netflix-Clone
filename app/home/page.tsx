import { Metadata } from "next";

import { MovieVideo } from "../components/movieVideo";
import { RecentlyAdded } from "../components/recentlyAdded";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app"
}

export default function HomePage(): JSX.Element {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded />
    </div>
  )
}