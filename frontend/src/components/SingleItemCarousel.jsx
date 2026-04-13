/*COMPONENTS*/
import ReleaseMovieCard from "./ReleaseMovieCard";

function SingleItemCarousel( { movies } ) {
    return (
        <div>
            <h2>Single Item Carousel</h2>
            <div className="h-[600px] " >
                {movies.map((movie, index) => (
                    <ReleaseMovieCard key={index} movie={movie} />
                ))}
            </div>    
        </div>
    );
}   

export default SingleItemCarousel;