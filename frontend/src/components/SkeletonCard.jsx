function SkeletonCard() {

    return (
        <div className="w-[200px] bg-zinc-900 rounded-xl overflow-hidden">

            {/* Poster */}
            <div className="h-[250px] w-full bg-zinc-800 animate-pulse" />

            {/* Content */}
            <div className="p-3">

                <div className="h-4 rounded bg-zinc-800 animate-pulse" />
                <div className="mt-3 h-2 w-2/3 rounded bg-zinc-800 animate-pulse" />

            </div>

        </div>
    );

}

export default SkeletonCard;