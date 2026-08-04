package com.example.backend.TMDB_Client.client;

import com.example.backend.TMDB_Client.config.TMDBProperties;
import com.example.backend.TMDB_Client.dto.MovieTrailerDTO;
import com.example.backend.TMDB_Client.dto.NewReleaseMovieDTO;
import com.example.backend.TMDB_Client.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
public class MovieClient {

    private final WebClient webClient;
    private final TMDBProperties properties;

    @Cacheable("popularMovies")
    public MoviesListResponse getPopularMovies() {

        return webClient.get()
            .uri(uriBuilder -> uriBuilder
                    .path("/movie/popular")
                    .queryParam("api_key", properties.getApiKey())
                    .build())
            .retrieve()
            .bodyToMono(MoviesListResponse.class)
            .block();
    }

    @Cacheable("trendingMovies")
    public MoviesListResponse getTrendingMovies() {
        return webClient.get()
            .uri(uriBuilder -> uriBuilder
                    .path("/trending/movie/week")
                    .queryParam("api_key", properties.getApiKey())
                    .build())
            .retrieve()
            .bodyToMono(MoviesListResponse.class)
            .block();
    }

    @Cacheable("newReleases")
    public NewReleaseMoviesListResponse getNewReleases() {

            return webClient.get()
                    .uri(uriBuilder -> uriBuilder
                            .path("/movie/now_playing")
                            .queryParam("api_key", properties.getApiKey())
                            .build())
                    .retrieve()
                    .bodyToMono(NewReleaseMoviesListResponse.class)
                    .block();
    }

    public MoviesListResponse getRandomMovie() {

        int randomizePageResult = ThreadLocalRandom.current().nextInt(1, 301);
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/trending/movie/week")
                        .queryParam("api_key", properties.getApiKey())
                        .queryParam("sort_by", "popularity.asc")
                        .queryParam("page", randomizePageResult)
                        .build())
                .retrieve()
                .bodyToMono(MoviesListResponse.class)
                .block();
    }

    public SearchMoviesListResponse getSearchMovieResults(String query, int page) {

        int randomizePageResult = ThreadLocalRandom.current().nextInt(1, 301);
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/search/movie")
                        .queryParam("api_key", properties.getApiKey())
                        .queryParam("query", query)
                        .queryParam("page", page)
                        .build())
                .retrieve()
                .bodyToMono(SearchMoviesListResponse.class)
                .block();
    }

    public DiscoverMoviesListResponse discoverMovies(Integer page, Integer genre, Integer yearFrom, Integer yearTo, Double rating, String sortBy) {

        return webClient.get()
                .uri(uriBuilder -> {
                    uriBuilder
                            .path("/discover/movie")
                            .queryParam("api_key", properties.getApiKey())
                            .queryParam("page", page)
                            .queryParam("sort_by", sortBy);
                    if (genre != null) {
                        uriBuilder.queryParam("with_genres", genre);
                    }

                    if (yearFrom != null) {
                        uriBuilder.queryParam(
                                "primary_release_date.gte",
                                yearFrom + "-01-01"
                        );
                    }

                    if (yearTo != null) {
                        uriBuilder.queryParam(
                                "primary_release_date.lte",
                                yearTo + "-12-31"
                        );
                    }

                    if (rating != null) {
                        uriBuilder.queryParam(
                                "vote_average.gte",
                                rating
                        );
                    }
                    return uriBuilder.build();
                })
                .retrieve()
                .bodyToMono(DiscoverMoviesListResponse.class)
                .block();
    }

    public MovieTrailerResponse getMovieTrailer(Integer movieId) {

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/movie/{id}/videos")
                        .queryParam("api_key", properties.getApiKey())
                        .build(movieId))
                .retrieve()
                .bodyToMono(MovieTrailerResponse.class)
                .block();
    }
}
