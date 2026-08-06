package com.example.backend.service;

import com.example.backend.tmdb_client.client.MovieClient;
import com.example.backend.tmdb_client.dto.movies.BasicMovieDTO;
import com.example.backend.tmdb_client.dto.movies.MovieDetailsDTO;
import com.example.backend.tmdb_client.dto.movies.MovieTrailerDTO;
import com.example.backend.tmdb_client.response.movies.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieClient movieClient;

    public MoviesListResponse getPopularMovies() {
        return movieClient.getPopularMovies();
    }

    public MoviesListResponse getTrendingMovies() { return movieClient.getTrendingMovies(); }

    public NewReleaseMoviesListResponse getNewReleaseMovies() { return movieClient.getNewMovieReleases(); }

    public BasicMovieDTO getRandomMovie(){
        return movieClient.getRandomMovie().getResults().get(0);
    }

    public SearchMoviesListResponse getSearchMoviesResults(String query, int page) { return movieClient.getSearchMovieResults(query,page); }

    public DiscoverMoviesListResponse discoverMovies(Integer page, Integer genre, Integer yearFrom, Integer yearTo, Double rating, String sortBy) {
        return movieClient.discoverMovies(page, genre, yearFrom, yearTo, rating, sortBy);
    }

    public MovieTrailerDTO getMovieTrailer(Integer movieId) {

        MovieTrailerResponse response = movieClient.getMovieTrailer(movieId);

        if (response == null || response.getResults() == null) {
            return null;
        }

        return response.getResults().stream()
                .filter(video -> "YouTube".equals(video.getSite()))
                .filter(video -> "Trailer".equals(video.getType()))
                .filter(video -> Boolean.TRUE.equals(video.getOfficial()))
                .findFirst()

                .or(() ->
                        response.getResults().stream()
                                .filter(video -> "YouTube".equals(video.getSite()))
                                .filter(video -> "Trailer".equals(video.getType()))
                                .findFirst()
                )

                .or(() ->
                        response.getResults().stream()
                                .filter(video -> "YouTube".equals(video.getSite()))
                                .findFirst()
                )

                .orElse(null);
    }

    public MovieDetailsDTO getMovieDetails(Integer movieId) {

        MovieDetailsResponse response = movieClient.getMovieDetails(movieId);

        return MovieDetailsDTO.builder()

                .id(response.getId())
                .title(response.getTitle())
                .overview(response.getOverview())
                .runtime(response.getRuntime())
                .releaseDate(response.getReleaseDate())
                .rating(response.getVoteAverage())
                .posterPath(response.getPosterPath())
                .budget(response.getBudget())
                .revenue(response.getRevenue())
                .status(response.getStatus())
                .genres(response.getGenres())
                .productionCompanies(response.getProductionCompanies())
                .productionCountries(response.getProductionCountries())
                .spokenLanguages(response.getSpokenLanguages())
                .build();
    }
}