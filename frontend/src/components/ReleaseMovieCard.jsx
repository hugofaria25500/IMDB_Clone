function ReleaseMovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <p>Rating: {movie.rating}</p>
      </div>

    </div>
  );
}

export default ReleaseMovieCard;