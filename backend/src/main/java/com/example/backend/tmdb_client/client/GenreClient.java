package com.example.backend.TMDB_Client.client;

import com.example.backend.TMDB_Client.config.TMDBProperties;
import com.example.backend.TMDB_Client.response.genres.GenreResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class GenreClient {

    private final WebClient webClient;
    private final TMDBProperties properties;

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

    @Cacheable("seriesGenres")
    public GenreResponse getSeriesGenres() {

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/genre/tv/list")
                        .queryParam("api_key", properties.getApiKey())
                        .build())
                .retrieve()
                .bodyToMono(GenreResponse.class)
                .block();
    }
}
