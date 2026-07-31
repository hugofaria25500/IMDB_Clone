package com.example.backend.TMDB_Client.client;

import com.example.backend.TMDB_Client.config.TMDBProperties;
import com.example.backend.TMDB_Client.response.PopularMoviesListResponse;
import com.example.backend.TMDB_Client.response.TrendingMoviesListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class MovieClient {

    private final WebClient webClient;
    private final TMDBProperties properties;

    @Cacheable("popularMovies")
    public PopularMoviesListResponse getPopularMovies() {

        return webClient.get()
            .uri(uriBuilder -> uriBuilder
                    .path("/movie/popular")
                    .queryParam("api_key", properties.getApiKey())
                    .build())
            .retrieve()
            .bodyToMono(PopularMoviesListResponse.class)
            .block();
    }

    @Cacheable("trendingMovies")
    public TrendingMoviesListResponse getTrendingMovies() {
        return webClient.get()
            .uri(uriBuilder -> uriBuilder
                    .path("/trending/movie/week")
                    .queryParam("api_key", properties.getApiKey())
                    .build())
            .retrieve()
            .bodyToMono(TrendingMoviesListResponse.class)
            .block();
    }

    public String getTopRatedMovies() {
        return null;
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

    public String getMovieCredits(int movieId) {
        return null;
    }

    public String getMovieVideos(int movieId) {
        return null;
    }

    public String getMovieRecommendations(int movieId) {
        return null;
    }


}
