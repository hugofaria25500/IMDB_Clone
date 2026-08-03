/*COMPONENTS*/
import MediaCard from "../components/MediaCard";

function Grid({ catalog = [], onOpenModal, loading, hasSearched = true }) {
    if (loading) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-xl overflow-hidden"
                    >
                        <div className="h-[250px] w-[200px] bg-zinc-800 rounded-xl animate-pulse" />

                        <div className="mt-3 h-4 rounded bg-zinc-800 animate-pulse" />

                        <div className="mt-2 h-3 w-2/3 rounded bg-zinc-800 animate-pulse" />
                    </div>
                ))}
            </div>
        );
    }

    if (!hasSearched) {
        return (
            <div className="flex flex-col items-center justify-center">

                <h2 className="text-2xl font-semibold text-white">
                    Lights, Camera... Search!
                </h2>

                <p className="text-gray-400 mt-3">
                    Start typing a movie title above and we'll help you find your next favorite film.
                </p>

            </div>
        );
    }

    if (catalog.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center">

                <h2 className="text-2xl font-semibold">
                    No Movies Found
                </h2>

                <p className="text-gray-400 mt-3">
                    We couldn't find any matches. Try another title, check the spelling, or search using fewer words.
                </p>

            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {catalog.map(movie => (

                <MediaCard
                    key={movie.id}
                    item={movie}
                    onClick={onOpenModal}
                />

            ))}

        </div>
    );
}

export default Grid;

