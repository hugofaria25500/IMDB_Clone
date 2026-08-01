package com.example.backend.TMDB_Client.client;

import com.example.backend.TMDB_Client.config.TMDBProperties;
import com.example.backend.TMDB_Client.dto.NewReleaseMovieDTO;
import com.example.backend.TMDB_Client.response.MoviesListResponse;
import com.example.backend.TMDB_Client.response.NewReleaseMoviesListResponse;
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

    public String getUpcomingMovies() {
        return null;
    }

    public String getMovieById(int movieId) {
        return null;
    }

    public String searchMovies(String query) {
        return null;
    }

    public String discoverMovies() {
        return null;
    }
}
