function SkeletonCard() {
    {/*LOADING CARD COMPONENT*/}
    return (
        <div className="w-[200px] bg-zinc-900 rounded-xl overflow-hidden">

            {/*POSTER*/}
            <div className="h-[250px] w-full bg-zinc-800 animate-pulse" />

            {/*CONTENT*/}
            <div className="p-3">
                {/*TITLE*/}
                <div className="h-4 rounded bg-zinc-800 animate-pulse" />
                {/*GENRES*/}
                <div className="mt-3 h-2 w-2/3 rounded bg-zinc-800 animate-pulse" />
                {/*YEAR AND RATING*/}
                <div className="mt-3 h-2 w-2/3 rounded bg-zinc-800 animate-pulse" />
            </div>

        </div>
    );

}

export default SkeletonCard;