/*COMPONENTS*/
import MediaCard from "../components/MediaCard";
import SkeletonCard from "./SkeletonCard";

function Grid({type, catalog = [], onOpenModal, loading, hasSearched = true }) {
    if (loading) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-xl overflow-hidden"
                    >
                       <SkeletonCard />
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
                    {type === "movies"
                        ? "Start typing a movie title above and we'll help you find your next favorite film."
                        : "Start typing a series name above and we'll help you find your next favorite series."}
                </p>

            </div>
        );
    }

    if (catalog.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center">

                <h2 className="text-2xl font-semibold">
                    {type === "movies"
                        ? "No Movies Found"
                        : "No Series Found"}
                </h2>

                <p className="text-gray-400 mt-3">
                    We couldn't find any matches. Try another title, check the spelling, or search using fewer words.
                </p>

            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {catalog.map(item => (

                <MediaCard
                    key={item.id}
                    type={type}
                    item={item}
                    onClick={onOpenModal}
                />

            ))}

        </div>
    );
}

export default Grid;

