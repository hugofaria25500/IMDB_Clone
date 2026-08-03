/*COMPONENTS*/
import MediaCard from "../components/MediaCard";

function Grid({ catalog = [], onOpenModal, loading, emptyTitle, emptyDescription }) {
    if (loading) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-xl overflow-hidden"
                    >
                        <div className="h-[250px] bg-zinc-800 rounded-xl animate-pulse" />

                        <div className="mt-3 h-4 rounded bg-zinc-800 animate-pulse" />

                        <div className="mt-2 h-3 w-2/3 rounded bg-zinc-800 animate-pulse" />
                    </div>
                ))}
            </div>
        );
    }

    if (catalog.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center">

                <h2 className="text-2xl font-semibold">
                    {emptyTitle}
                </h2>

                <p className="text-gray-400 mt-3">
                    {emptyDescription}
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

