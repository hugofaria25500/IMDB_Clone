package com.example.backend.TMDB_Client.client;

import com.example.backend.TMDB_Client.config.TMDBProperties;
import com.example.backend.TMDB_Client.dto.GenreResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class GenreClient {

    private final WebClient webClient;
    private final TMDBProperties properties;

    public GenreClient(WebClient tmdbWebClient,
                       TMDBProperties properties) {
        this.webClient = tmdbWebClient;
        this.properties = properties;
    }

    @Cacheable("movieGenres")
    public GenreResponse getMovieGenres() {

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/genre/movie/list")
                        .queryParam("api_key", properties.getApiKey())
                        .build())
                .retrieve()
                .bodyToMono(GenreResponse.class)
                .block();
    }
}
