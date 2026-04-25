/*MOVIES*/
import { moviesMock, popularMovies, trendingMovies, newMoviesReleases, randomMovie, moviesDetailedMock} from "../js/data";
/*SERIES*/
import { seriesMock, popularSeries, trendingSeries, newSeriesReleases, randomSerie, seriesDetailedMock} from "../js/data";

/*MOVIES*/
export async function getMovies() {
  return moviesMock;
}

export async function getPopularMovies() {
  return popularMovies;
}

export async function getTrendingMovies() {
  return trendingMovies;
}

export async function getNewMoviesReleases() {
  return newMoviesReleases;
}

export async function getRandomMovie() {
  return getMovies().then(movies => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  });
}

export async function getMoviesDetails() {
  return moviesDetailedMock;
}

/*SERIES*/
export async function getSeries() {
  return seriesMock;
}

export async function getPopularSeries() {
  return popularSeries;
}

export async function getTrendingSeries() {
  return trendingSeries;
}

export async function getNewSeriesReleases() {
  return newSeriesReleases;
}

export async function getRandomSerie() {
  return getSeries().then(series => {
    const randomIndex = Math.floor(Math.random() * series.length);
    return series[randomIndex];
  });
}

export async function getSeriesDetails() {
  return seriesDetailedMock;
}

/*MEDIA DETAILS*/
export async function getMediaDetails(id) {

  return {
    id: id,
    title: "Mock Media Title",
    year: 2023,
    views: 123456,
    seasons: 5, // Only for series
    runtime: 120, // Only for movies
    genres: ["Action", "Adventure", "Sci-Fi"],
    language: "English",
    rating: "8.5",
    ageRating: "PG-13",
    overview: "This is a mock overview of the media item. It provides a brief description of the plot and key elements of the story.",
    poster: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/9ijMGlJKqcslswWUzTEwScm82G.jpg",
    trailer: {
      url: "https://www.youtube.com/watch?v=Xt4X4FvXk2A"
    },
    cast: [
      { name: "Bryan Cranston", character: "Walter White", photo: "https://image.tmdb.org/t/p/w200/7Jahy5LZX2Fo8fGJltMreAI49hC.jpg" },
      { name: "Aaron Paul", character: "Jesse Pinkman", photo: "https://image.tmdb.org/t/p/w200/9PrED3MCHsBam1a8h1V6W0yK8w.jpg" },
      { name: "Anna Gunn", character: "Skyler White", photo: "https://image.tmdb.org/t/p/w200/7lZ0b4p6Z9z1zH3kZ9XcY3k1.jpg" },
      { name: "Dean Norris", character: "Hank Schrader", photo: "https://image.tmdb.org/t/p/w200/6n5F9ZkL6sFQ3rF7z5z2G3z.jpg" },
      { name: "Bob Odenkirk", character: "Saul Goodman", photo: "https://image.tmdb.org/t/p/w200/7F2x0yFh1v1u3c7k7.jpg" }
    ],
    director: "Vince Gilligan",
    tags: ["Drugs", "Crime", "Transformation"],
    recommendations: [
      { id: 101, title: "Breaking Bad", year: 2008, rating: 9.5, views: 2000000, genres: ["Drama"], image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
      { id: 102, title: "Game of Thrones", year: 2011, rating: 9.2, views: 2100000, genres: ["Fantasy","Drama"], image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" },
      { id: 103, title: "Stranger Things", year: 2016, rating: 8.7, views: 1800000, genres: ["Sci-Fi","Horror"], image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
      { id: 104, title: "The Office", year: 2005, rating: 8.9, views: 1700000, genres: ["Comedy"], image: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg" }
    ]
  }

  return media;
}

export async function getMediaDetails2(id) {
  const moviesDetails = await getMoviesDetails();
  const seriesDetails = await getSeriesDetails();
  const media =  [...moviesDetails, ...seriesDetails].find(item => item.id === id); 
  return media;
}