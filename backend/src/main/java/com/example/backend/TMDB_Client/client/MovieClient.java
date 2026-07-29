package com.example.backend.TMDB_Client.client;

import com.example.backend.TMDB_Client.config.TMDBProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class MovieClient {

    private final WebClient webClient;
    private final TMDBProperties properties;

    public MovieClient(WebClient tmdbWebClient,
                       TMDBProperties properties) {

        this.webClient = tmdbWebClient;
        this.properties = properties;
    }

    public String getPopularMovies() {

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/movie/popular")
                        .queryParam("api_key", properties.getApiKey())
                        .build())
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
    public String getTrendingMovies() {
        return null;
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
