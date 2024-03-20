import { MovieVideo } from "../components/movieVideo";
import { RecentlyAdded } from "../components/recentlyAdded";

export default async function HomePage() {
  return (
      <div className="p-5 lg:p-0">
        <MovieVideo />

        <h1 className="text-3xl font-bold">
          Recently Added
        </h1>

        <RecentlyAdded />
      </div>
  )
}